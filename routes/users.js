"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class Users {
    constructor() {
        if (Users._instance) {
            throw new Error("Instantiation failed.");
        }
    }
    route(router) {
        router.route("/api/users")
            .get(function (req, res) {
            services_1.UserService.getUsers(function (users) {
                res.json({ users: users });
            }, function (error) {
                res.send(error);
            });
        });
        router.route("/api/users/:user_id")
            .get(function (req, res) {
            let userId = req.params["user_id"];
            services_1.UserService.getUser(userId, function (user) {
                res.json({ user: user });
            }, function (error) {
                res.send(error);
            });
        })
            .delete(function (req, res) {
            let userId = req.params["user_id"];
            services_1.UserService.deleteUser(userId, function (isSuccess, error) {
                res.json({
                    isSuccess: isSuccess,
                    error: error
                });
            });
        });
    }
    static route(router) {
        Users._instance.route(router);
    }
}
Users._instance = new Users();
exports.Users = Users;
