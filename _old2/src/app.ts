/// <reference path="../typings/tsd.d.ts" />
/// <reference path="_all.d.ts" />
"use strict";

import * as bodyParser from "body-parser"; //import bodyParser = require("body-parser");
import * as cookieParser from "cookie-parser";
import * as express from "express"; //import express = require("express");
import * as logger from "morgan";
import * as path from "path"; //import path = require("path");

import * as Settings from "./settings";
import * as Routes from "./routes";
//import * as Index from "./routes/index";

/**
 * The server.
 *
 * @class Server
 */
class Server {

  public app: express.Application;

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): Server {
    return new Server();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    //create expressjs application
    this.app = express();

    //configure application
    this.config();

    //configure routes
    this.routes();
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   * @return void
   */
  private config() {
    //configure jade
    this.app.set("views", path.join(__dirname, "views"));

    //this.app.set("view engine", "jade");
    this.app.set("view engine", "ejs");
    this.app.engine("html", require("ejs").renderFile);

    //mount logger
    this.app.use(logger("dev"));

    //mount json form parser
    this.app.use(bodyParser.json());

    //mount query string parser
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.use(cookieParser());

    //add static paths
    this.app.use(express.static(path.join(__dirname, "public")));
    this.app.use(express.static(path.join(__dirname, "bower_components"))); 

    // catch 404 and forward to error handler
    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      var error: Error = new Error("Not Found");
      err.status = 404;
      next(err);
    });
  }

  /**
   * Configure routes
   *
   * @class Server
   * @method routes
   * @return void
   */
  private routes() {
    //get router
    let router: express.Router = express.Router();

    //home page
    router.get("/", Routes.Index.get.bind(Routes.Index.get));

    Routes.Matches.route(router);
    Routes.Games.route(router);
    Routes.Users.route(router);
    Routes.Players.route(router);

    //use router middleware
    this.app.use(router);
    this.app.use("/api", router);

    //this.app.use('/', index);
    //this.app.use('/api/v1/', todos);
  }
}

export = Server.bootstrap().app;