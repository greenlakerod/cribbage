"use strict";
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const Routes = require("./routes");
class Server {
    static bootstrap() {
        return new Server();
    }
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "jade");
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.use(express.static(path.join(__dirname, "bower_components")));
        this.app.use(function (err, req, res, next) {
            var error = new Error("Not Found");
            err.status = 404;
            next(err);
        });
    }
    routes() {
        let router = express.Router();
        router.get("/", Routes.Index.get.bind(Routes.Index.get));
        Routes.Matches.route(router);
        Routes.Games.route(router);
        Routes.Users.route(router);
        Routes.Players.route(router);
        this.app.use(router);
        this.app.use("/api", router);
    }
}
module.exports = Server.bootstrap().app;
