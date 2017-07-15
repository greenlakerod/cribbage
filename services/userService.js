"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data = require("../data");
const encryptionService_1 = require("./encryptionService");
class UserService {
    constructor() {
        if (UserService._instance) {
            throw new Error("Instantiation error");
        }
        this._userRepository = new Data.Repositories.UserRepository();
        this._roleRepository = new Data.Repositories.RoleRepository();
        this._userRoleRepository = new Data.Repositories.UserRoleRepository();
    }
    static createUser(username, email, password, roles, onUserCreated, onError) {
        UserService._instance._userRepository.getAllBy("username", username, function (users) {
            if (users.length === 0) {
                var passwordSalt = encryptionService_1.EncryptionService.createSalt();
                var user = {
                    username: username,
                    salt: passwordSalt,
                    email: email,
                    isLocked: false,
                    hashedPassword: encryptionService_1.EncryptionService.encryptPassword(password, passwordSalt),
                    dateCreated: new Date().toUTCString()
                };
                UserService._instance._userRepository.add(user, function (userId) {
                    user.id = userId;
                    if (roles) {
                        roles.forEach(function (roleId, index, array) {
                            UserService.addUserToRole(user, roleId, function (isSuccess, error) {
                            });
                        });
                        onUserCreated(user);
                    }
                    else {
                        onUserCreated(user);
                    }
                }, function (error) {
                    onError(error);
                });
            }
            else {
                onError(new Error("Username already in use"));
            }
        }, function (error) {
            onError(error);
        });
    }
    static getUser(userId, onUserRetrieved, onError) {
        UserService._instance._userRepository.get(userId, onUserRetrieved, onError);
    }
    static getUsers(onUsersRetrieved, onError) {
        UserService._instance._userRepository.getAll(null, onUsersRetrieved, onError);
    }
    static getUserRoles(username, onUserRolesRetrieved, onError) {
        UserService._instance._userRoleRepository.getAllBy("username", username, onUserRolesRetrieved, onError);
    }
    static isUserValid(user, password) {
        return UserService.isPasswordValid(user, password) ? !user.isLocked : false;
    }
    static editUser(user, onComplete) {
        UserService._instance._userRepository.edit(user, onComplete);
    }
    static deleteUser(userId, onComplete) {
        UserService._instance._userRepository.delete(userId, onComplete);
    }
    static addUserToRole(user, roleId, onComplete) {
        UserService._instance._roleRepository.get(roleId, function (entity) {
            var userRole = {
                roleId: roleId,
                userId: user.id
            };
            UserService._instance._userRoleRepository.add(userRole, function (entityId) {
                onComplete(true, null);
            }, function (error) {
                onComplete(false, error);
            });
        }, function (error) {
            onComplete(false, error);
        });
    }
    static isPasswordValid(user, password) {
        return encryptionService_1.EncryptionService.encryptPassword(password, user.salt) === user.hashedPassword;
    }
}
UserService._instance = new UserService();
exports.UserService = UserService;
