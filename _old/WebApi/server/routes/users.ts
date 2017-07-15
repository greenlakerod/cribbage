import express = require('express');

import * as Cribbage from '../cribbage';
import * as Messages from '../cribbage/messages/users';
import {UserService} from '../services';

export class Users {
    private static _instance: Users = new Users();
    
    constructor() {
        if (Users._instance) {
            throw new Error("Instantiation failed.");
        }
    }

    public route(router: express.IRouter): void {
        router.route("/api/users")
            .post(function(req: express.Request, res: express.Response) {
                var body:Messages.CreateUser.IRequest = <Messages.CreateUser.IRequest>req.body;
                UserService.createUser(body.username, body.email, body.password, body.roleIds, function(user:Cribbage.IUser) {
                    res.json(<Messages.CreateUser.IResponse>{ userId: user.id });
                }, function(error: Error) {
                    res.send(error);
                });
            })
            .put(function(req: express.Request, res: express.Response) {
                var body:Messages.ModifyUser.IRequest = <Messages.ModifyUser.IRequest>req.body;
                UserService.editUser(body.user, function(isSuccess: boolean, error: Error) {
                    res.json(<Messages.ModifyUser.IResponse>{
                        isSuccess: isSuccess,
                        error: error
                    });
                });
            })
            .get(function(req: express.Request, res: express.Response) {
                UserService.getUsers(function(users: Array<Cribbage.IUser>) {
                    res.json(<Messages.GetUsers.IResponse>{ users: users });
                }, function(error: Error) {
                    res.send(error);
                });
            });

        router.route("/api/users/:user_id")
            .get(function(req: express.Request, res: express.Response) {
                var userId = <string>req.params["user_id"];
                UserService.getUser(userId, function(user: Cribbage.IUser) {
                    res.json(<Messages.GetUser.IResponse>{ user: user });
                }, function(error: Error) {
                    res.send(error);
                })
            })
            .delete(function(req: express.Request, res: express.Response) {
                var userId = <string>req.params["user_id"];
                UserService.deleteUser(userId, function(isSuccess: boolean, error: Error) {
                    res.json(<Messages.DeleteUser.IResponse>{
                        isSuccess: isSuccess,
                        error: error
                    });                    
                });
            });
    }

    public static route(router: express.IRouter): void {
        Users._instance.route(router);
    }
}