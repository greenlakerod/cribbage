import * as Cribbage from "../cribbage";
import * as Data from "../data";
import {EncryptionService} from "./encryptionService";

export class UserService {
    private static _instance: UserService = new UserService();
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
        UserService._instance._userRepository.getAllBy("username", username, function(users: Array<Cribbage.IUser>) {
            if (users.length === 0) {
                var passwordSalt = EncryptionService.createSalt();
                var user = <Cribbage.IUser>{
                    username: username,
                    salt: passwordSalt,
                    email: email,
                    isLocked: false,
                    hashedPassword: EncryptionService.encryptPassword(password, passwordSalt),
                    dateCreated: new Date().toUTCString()
                };

                UserService._instance._userRepository.add(user, function(userId: string) {
                    user.id = userId;

                    if (roles) {
                        roles.forEach(function(roleId, index, array) {
                            UserService.addUserToRole(user, roleId, function(isSuccess: boolean, error: Error) {
                                //todo
                            });
                        });
                        onUserCreated(user);
                    } else {
                        onUserCreated(user);
                    }
                    
                }, function(error: Error) {
                    onError(error);
                });
            } else {
                onError(new Error("Username already in use"));
            }
        }, function(error: Error) {
            onError(error);
        });
    }
    public static getUser(userId: string, onUserRetrieved: (user: Cribbage.IUser) => void, onError: (error: Error) => void): void {
        UserService._instance._userRepository.get(userId, onUserRetrieved, onError);
    }
    public static getUsers(onUsersRetrieved: (users: Array<Cribbage.IUser>) => void, onError: (error: Error) => void): void {
        UserService._instance._userRepository.getAll(null, onUsersRetrieved, onError);
    }
    public static getUserRoles(username: string,
                               onUserRolesRetrieved: (users: Array<Cribbage.IUserRole>) => void,
                               onError: (error: Error) => void): void {
        UserService._instance._userRoleRepository.getAllBy("username", username, onUserRolesRetrieved, onError);
    }
    public static isUserValid(user: Cribbage.IUser, password: string): boolean {
        return UserService.isPasswordValid(user, password) ? !user.isLocked : false;
    }
    public static editUser(user: Cribbage.IUser, onComplete: (isSuccess: boolean, error: Error) => void): void {
        UserService._instance._userRepository.edit(user, onComplete);
    }
    public static deleteUser(userId: string, onComplete: (isSuccess: boolean, error: Error) => void): void {
        UserService._instance._userRepository.delete(userId, onComplete);
    }

    private static addUserToRole(user: Cribbage.IUser, roleId: string, onComplete: (isSuccess: boolean, error: Error) => void): void {
        UserService._instance._roleRepository.get(roleId, function(entity: Cribbage.IRole) {
            var userRole = <Cribbage.IUserRole>{
                roleId: roleId,
                userId: user.id
            };
            UserService._instance._userRoleRepository.add(userRole, function(entityId: string) {
                onComplete(true, null);
            }, function(error: Error) {
                onComplete(false, error);
            });
        }, function(error: Error) {
            onComplete(false, error);
        });
    }
    private static isPasswordValid(user: Cribbage.IUser, password: string): boolean {
        return EncryptionService.encryptPassword(password, user.salt) === user.hashedPassword;
    }
}