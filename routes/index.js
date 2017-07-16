"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Index {
    constructor() {
        if (Index._instance) {
            throw new Error("Instantiation failed.");
        }
    }
    get(req, res, next) {
        res.render("index");
    }
    static get(req, res, next) {
        Index._instance.get(req, res, next);
    }
}
Index._instance = new Index();
exports.Index = Index;
