import express = require('express');

export class Games {
    private static _instance: Games = new Games();
    
    constructor() {
        if (Games._instance) {
            throw new Error("Instantiation failed.");
        }
    }

    public route(router: express.IRouter): void {
        router.route("/api/games")
            .post(function(req: express.Request, res: express.Response){

            })
            .get(function(req: express.Request, res: express.Response){
                
            });

        router.route("/api/games/:game_id")
            .get(function(req: express.Request, res: express.Response){
                
            })
            .put(function(req: express.Request, res: express.Response){
                
            })
            .delete(function(req: express.Request, res: express.Response){
                
            });
    }

    public static route(router: express.IRouter): void {
        Games._instance.route(router);
    }
}