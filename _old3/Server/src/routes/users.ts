import * as express from "express"; //import express = require("express");
<<<<<<< HEAD:_old2/src/routes/users.ts
=======
import * as bodyParser from "body-parser";
>>>>>>> fd75765c391e877291a58fa29715e940541ec93e:src/routes/users.ts
import * as Cribbage from "../cribbage";
import * as Messages from "../cribbage/messages/users";
import {UserService} from "../services";

export class Users {
    private static _instance: Users = new Users();
    
    constructor() {
        if (Users._instance) {
            throw new Error("Instantiation failed.");
        }
    }

    public route(router: express.Router): void {
        router.route("/api/users")
<<<<<<< HEAD:_old2/src/routes/users.ts
            // .post(function(req: express.Request, res: express.Response) {
            //     let body: Messages.CreateUser.IRequest = <Messages.CreateUser.IRequest>req.body;
            //     UserService.createUser(body.username, body.email, body.password, body.roleIds, function(user: Cribbage.IUser) {
            //         res.json(<Messages.CreateUser.IResponse>{ userId: user.id });
            //     }, function(error: Error) {
            //         res.send(error);
            //     });
            // })
            // .put(function(req: express.Request, res: express.Response) {
            //     let body:Messages.ModifyUser.IRequest = <Messages.ModifyUser.IRequest>req.body;
            //     UserService.editUser(body.user, function(isSuccess: boolean, error: Error) {
            //         res.json(<Messages.ModifyUser.IResponse>{
            //             isSuccess: isSuccess,
            //             error: error
            //         });
            //     });
            // })
=======
            .post(function(req: express.Request, res: express.Response) {
                let body: Messages.CreateUser.IRequest = <Messages.CreateUser.IRequest>req["body"];
                UserService.createUser(body.username, body.email, body.password, body.roleIds, function(user: Cribbage.IUser) {
                    res.json(<Messages.CreateUser.IResponse>{ userId: user.id });
                }, function(error: Error) {
                    res.send(error);
                });
            })
            .put(function(req: express.Request, res: express.Response) {
                let body: Messages.ModifyUser.IRequest = <Messages.ModifyUser.IRequest>req["body"];
                UserService.editUser(body.user, function(isSuccess: boolean, error: Error) {
                    res.json(<Messages.ModifyUser.IResponse>{
                        isSuccess: isSuccess,
                        error: error
                    });
                });
            })
>>>>>>> fd75765c391e877291a58fa29715e940541ec93e:src/routes/users.ts
            .get(function(req: express.Request, res: express.Response) {
                UserService.getUsers(function(users: Array<Cribbage.IUser>) {
                    res.json(<Messages.GetUsers.IResponse>{ users: users });
                }, function(error: Error) {
                    res.send(error);
                });
            });

        router.route("/api/users/:user_id")
            .get(function(req: express.Request, res: express.Response) {
                let userId = <string>req.params["user_id"];
                UserService.getUser(userId, function(user: Cribbage.IUser) {
                    res.json(<Messages.GetUser.IResponse>{ user: user });
                }, function(error: Error) {
                    res.send(error);
                });
            })
            .delete(function(req: express.Request, res: express.Response) {
                let userId = <string>req.params["user_id"];
                UserService.deleteUser(userId, function(isSuccess: boolean, error: Error) {
                    res.json(<Messages.DeleteUser.IResponse>{
                        isSuccess: isSuccess,
                        error: error
                    });                    
                });
            });
    }

    public static route(router: express.Router): void {
        Users._instance.route(router);
    }
}