/// <reference path="../_all.d.ts" />
"use strict";

import * as express from "express";

export class Index {
  private static _instance: Index = new Index();

  constructor() {
    if (Index._instance) {
        throw new Error("Instantiation failed.");
    }
  }

  public get(req: express.Request, res: express.Response, next: express.NextFunction) {
    //render page
    res.render("index");
  }

  public static get(req: express.Request, res: express.Response, next: express.NextFunction): void {
    Index._instance.get(req, res, next);
  }
}