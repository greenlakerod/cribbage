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
            .post(function(req: express.Request, res: express.Response){
                
            })
            .get(function(req: express.Request, res: express.Response){
                
            });

        router.route("/api/users/:user_id")
            .get(function(req: express.Request, res: express.Response){
                
            })
            .put(function(req: express.Request, res: express.Response){
                
            })
            .delete(function(req: express.Request, res: express.Response){
                
            });
    }

    public static route(router: express.IRouter): void {
        Users._instance.route(router);
    }
}