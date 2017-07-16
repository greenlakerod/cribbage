import * as express from "express"; //import express = require("express");

export class Players {
    private static _instance: Players = new Players();
    
    constructor() {
        if (Players._instance) {
            throw new Error("Instantiation failed.");
        }
    }

    public route(router: express.Router): void {
        router.route("/api/players")
            .post(function(req: express.Request, res: express.Response) {

            })
            .get(function(req: express.Request, res: express.Response) {
                
            });

        router.route("/api/players/:player_id")
            .get(function(req: express.Request, res: express.Response) {
                
            })
            .put(function(req: express.Request, res: express.Response) {
                
            })
            .delete(function(req: express.Request, res: express.Response) {
                
            });

        router.route("/api/players/:player_id/hands")
            .post(function(req: express.Request, res: express.Response) {

            })
            .get(function(req: express.Request, res: express.Response) {
                
            });
    }

    public static route(router: express.Router): void {
        Players._instance.route(router);
    }
}