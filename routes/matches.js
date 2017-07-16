"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Matches {
    constructor() {
        if (Matches._instance) {
            throw new Error("Instantiation failed.");
        }
    }
    route(router) {
        router.route("/api/matches")
            .post(function (req, res) {
        })
            .get(function (req, res) {
        });
        router.route("/api/matches/:match_id")
            .get(function (req, res) {
        })
            .put(function (req, res) {
        })
            .delete(function (req, res) {
        });
        router.route("/api/matches/:match_id/games")
            .post(function (req, res) {
        })
            .get(function (req, res) {
        });
    }
    static route(router) {
        Matches._instance.route(router);
    }
}
Matches._instance = new Matches();
exports.Matches = Matches;
