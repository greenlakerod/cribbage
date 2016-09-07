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

        this._userRepository = new Data.Repositories.UserRepository();
        this._roleRepository = new Data.Repositories.RoleRepository();
        this._userRoleRepository = new Data.Repositories.UserRoleRepository();
    }

    public static createUser(username: string, email: string, password: string, roles: Array<string>,
                            onUserCreated: (user: Cribbage.IUser) => void, onError: (error: Error) => void): void {
        UserService._instance._createUser(username, email, password, roles, onUserCreated, onError);
    }
    public static getUser(userId: string, onUserRetrieved: (user: Cribbage.IUser) => void, onError: (error: Error) => void): void {
        UserService._instance._getUser(userId, onUserRetrieved, onError);
    }
    public static getUsers(onUsersRetrieved: (users: Array<Cribbage.IUser>) => void, onError: (error: Error) => void): void {
        UserService._instance._getUsers(onUsersRetrieved, onError);
    }
    public static getUserRoles(username: string, onUserRolesRetrieved: (users: Array<Cribbage.IUserRole>) => void, onError: (error: Error) => void): void {
        UserService._instance._getUserRoles(username, onUserRolesRetrieved, onError);
    }
    public static isUserValid(user: Cribbage.IUser, password: string): boolean {
        return UserService._instance._isUserValid(user, password);
    }
    public static editUser(user: Cribbage.IUser, onComplete: (isSuccess: boolean, error: Error) => void): void {
        UserService._instance._editUser(user, onComplete);
    }
    public static deleteUser(userId: string, onComplete: (isSuccess: boolean, error: Error) => void): void {
        UserService._instance._deleteUser(userId, onComplete);
    }

    public _createUser(username: string, email: string, password: string, roles: Array<string>, 
                       onUserCreated: (user: Cribbage.IUser) => void, onError: (error: Error) => void): void {
        var self = this;
        this._userRepository.getAllBy("username", username, function(users: Array<Cribbage.IUser>) {
            if (users.length == 0) {
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
        this._userRepository.get(userId, onUserRetrieved, onError);
    }
    public _getUsers(onUsersRetrieved: (users: Array<Cribbage.IUser>) => void, onError: (error: Error) => void): void {
        this._userRepository.getAll(onUsersRetrieved, onError);
    }
    public _getUserRoles(username: string, onUserRolesRetrieved: (users: Array<Cribbage.IUserRole>) => void, onError: (error: Error) => void): void{
        this._userRoleRepository.getAllBy("username", username, onUserRolesRetrieved, onError);
    }
    public _isUserValid(user: Cribbage.IUser, password: string): boolean {
        if (this.isPasswordValid(user, password)) {
            return !user.isLocked;
        }
        return false;
    }
    public _editUser(user: Cribbage.IUser, onComplete: (isSuccess: boolean, error: Error) => void): void {
        this._userRepository.edit(user, onComplete);
    }
    public _deleteUser(userId: string, onComplete: (isSuccess: boolean, error: Error) => void): void {
        this._userRepository.delete(userId, onComplete);
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