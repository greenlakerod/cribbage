import * as Cribbage from '../cribbage';
import * as Data from '../data';
import {EncryptionService} from './encryptionService';

export class UserService {
    private static _instance = new UserService();
    private _userRepository: Data.Repositories.IEntityBaseRepository<Cribbage.IUser>;
    private _roleRepository: Data.Repositories.IEntityBaseRepository<Cribbage.IRole>;
    private _userRoleRepository: Data.Repositories.IEntityBaseRepository<Cribbage.IUserRole>;

    constructor() {
        if (UserService._instance) {
            throw new Error("Instantiation error");
        }

        //todo: instantiate repositories
    }

    public static createUser(username: string, email: string, password: string, roles: Array<string>,
                            onUserCreated: (user: Cribbage.IUser) => void, onError: (error: Error) => void): void {
        UserService._instance._createUser(username, email, password, roles, onUserCreated, onError);
    }
    public static getUser(userId: string, onUserRetrieved: (entity: Cribbage.IUser) => void, onError: (error: Error) => void): void {
        UserService._instance._getUser(userId, onUserRetrieved, onError);
    }
    public static getUsers(onUsersRetrieved: (entities: Array<Cribbage.IUser>) => void, onError: (error: Error) => void): void {
        UserService._instance._getUsers(onUsersRetrieved, onError);
    }
    public static getUserRoles(username: string, onUserRolesRetrieved: (entities: Array<Cribbage.IUserRole>) => void, onError: (error: Error) => void): void {
        UserService._instance._getUserRoles(username, onUserRolesRetrieved, onError);
    }
    public static isUserValid(user: Cribbage.IUser, password: string): boolean {
        return UserService._instance._isUserValid(user, password);
    }
    public static editUser(user: Cribbage.IUser, onComplete: (isSuccess: boolean, error: Error) => void): void {
        UserService._instance._editUser(user, onComplete);
    }
    public static deleteUser(user: Cribbage.IUser, onComplete: (isSuccess: boolean, error: Error) => void): void {
        UserService._instance._deleteUser(user, onComplete);
    }

    public _createUser(username: string, email: string, password: string, roles: Array<string>, 
                       onUserCreated: (user: Cribbage.IUser) => void, onError: (error: Error) => void): void {
        var self = this;
        this._userRepository.getBy("username", username, function(entities: Array<Cribbage.IUser>) {
            if (entities.length == 0) {
                var passwordSalt = EncryptionService.createSalt();
                var user = <Cribbage.IUser>{
                    username: username,
                    salt: passwordSalt,
                    email: email,
                    isLocked: false,
                    hashedPassword: EncryptionService.encryptPassword(password, passwordSalt),
                    dateCreated: new Date().toUTCString()
                };

                self._userRepository.add(user, function(userId: string) {
                    user.id = userId;

                    if (roles) {
                        roles.forEach(function(roleId, index, array) {
                            self.addUserToRole(user, roleId, function(isSuccess: boolean, error: Error){
                                //todo
                            });
                        });
                        onUserCreated(user);
                    } else {
                        onUserCreated(user);
                    }
                    
                }, function(error:Error) {
                    onError(error);
                });
            } else {
                onError(new Error("Username already in use"));
            }
        }, function(error: Error) {
            onError(error);
        });        
    }
    public _getUser(userId: string, onUserRetrieved: (entity: Cribbage.IUser) => void, onError: (error: Error) => void): void {
        this._userRepository.get(userId, function(entity: Cribbage.IUser) {
            onUserRetrieved(entity);
        }, function(error: Error){
            onError(error);
        });
    }
    public _getUsers(onUsersRetrieved: (entities: Array<Cribbage.IUser>) => void, onError: (error: Error) => void): void {
        this._userRepository.getAll(function(users: Array<Cribbage.IUser>) {
            onUsersRetrieved(users);
        }, function(error: Error){
            onError(error);
        });
    }
    public _getUserRoles(username: string, onUserRolesRetrieved: (entities: Array<Cribbage.IUserRole>) => void, onError: (error: Error) => void): void{
        this._userRoleRepository.getBy("username", username, function(userRoles: Array<Cribbage.IUserRole>){
            onUserRolesRetrieved(userRoles);
        }, function(error: Error){
            onError(error);
        });
    }
    public _isUserValid(user: Cribbage.IUser, password: string): boolean {
        if (this.isPasswordValid(user, password)) {
            return !user.isLocked;
        }
        return false;
    }
    public _editUser(user: Cribbage.IUser, onComplete: (isSuccess: boolean, error: Error) => void): void {
        this._userRepository.edit(user, function(isSuccess: boolean, error: Error) {
            onComplete(isSuccess, error);
        });
    }
    public _deleteUser(user: Cribbage.IUser, onComplete: (isSuccess: boolean, error: Error) => void): void {
        this._userRepository.delete(user, function(isSuccess: boolean, error: Error) {
            onComplete(isSuccess, error);
        });
    }

    private addUserToRole(user: Cribbage.IUser, roleId: string, onComplete: (isSuccess: boolean, error: Error) => void): void {
        var self = this;
        this._roleRepository.get(roleId, function(entity: Cribbage.IRole) {
            var userRole = <Cribbage.IUserRole>{
                roleId: roleId,
                userId: user.id
            };
            self._userRoleRepository.add(userRole, function(entityId: string){
                onComplete(true, null);
            }, function(error: Error){
                onComplete(false, error);
            });
        }, function(error: Error){
            onComplete(false, error);
        });
    }
    private isPasswordValid(user: Cribbage.IUser, password: string): boolean {
        return EncryptionService.encryptPassword(password, user.salt) == user.hashedPassword;
    }
}