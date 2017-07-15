import * as express from "express"; //import express = require("express");

// export class Matches {
//     private static _instance: Matches = new Matches();
    
//     constructor() {
//         if (Matches._instance) {
//             throw new Error("Instantiation failed.");
//         }
//     }

//     public route(router: express.IRouter): void {
//         router.route("/api/matches")
//             .post(function(req: express.Request, res: express.Response) {

//             })
//             .get(function(req: express.Request, res: express.Response) {
                
//             });

//         router.route("/api/matches/:match_id")
//             .get(function(req: express.Request, res: express.Response) {
                
//             })
//             .put(function(req: express.Request, res: express.Response) {
                
//             })
//             .delete(function(req: express.Request, res: express.Response) {
                
//             });

//          router.route("/api/matches/:match_id/games")
//             .post(function(req: express.Request, res: express.Response) {

//             })
//             .get(function(req: express.Request, res: express.Response) {
                
//             });       
//     }

//     public static route(router: express.IRouter): void {
//         Matches._instance.route(router);
//     }
// }