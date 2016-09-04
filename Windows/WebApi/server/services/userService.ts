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

    public static createUser(username: string, email: string, password: string, roles: Array<string>): Cribbage.IUser {
        return UserService._instance._createUser(username, email, password, roles);
    }
    public static getUser(userId: string): Cribbage.IUser {
        return UserService._instance._getUser(userId);
    }
    public static getUserRoles(username: string): Array<Cribbage.IUserRole> {
        return UserService._instance._getUserRoles(username);
    }
    public static isUserValid(user: Cribbage.IUser, password: string): boolean {
        return UserService._instance._isUserValid(user, password);
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

                this._userRepository.Add(user);
                var self = this;
                if (roles) {
                    roles.forEach(function(role, index, array) {
                        self.addUserToRole(user, role);
                    });
                }
            } else {
                throw new Error("Username already in use");
            }
        }, function(error: Error) {

        });        
    }
    public _getUser(userId: string): Cribbage.IUser {
        return this._userRepository.get(userId);
    }
    public _getUserRoles(username: string): Array<Cribbage.IUserRole>{
        return this._userRoleRepository.GetAllByUsername(username);
    }
    public _isUserValid(user: Cribbage.IUser, password: string): boolean {
        if (this.isPasswordValid(user, password)) {
            return !user.isLocked;
        }
        return false;
    }
    public _editUser(user: Cribbage.IUser): void {
        this._userRepository.Edit(user);
    }

    public _getUsers(fn: (err: any, entities: Array<Cribbage.IUser>) => void): void {

    }


    private addUserToRole(user: Cribbage.IUser, roleId: string): void {
        var role = this._roleRepository.get(roleId);
        if (!role) {
            throw new Error("Role doesn't exist");
        }

        var userRole = <Cribbage.IUserRole>{
            roleId: roleId,
            userId: user.id
        };

        this._userRoleRepository.Add(userRole);
    }
    private isPasswordValid(user: Cribbage.IUser, password: string): boolean {
        return EncryptionService.encryptPassword(password, user.salt) == user.hashedPassword;
    }
}