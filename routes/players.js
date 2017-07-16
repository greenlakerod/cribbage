"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Players {
    constructor() {
        if (Players._instance) {
            throw new Error("Instantiation failed.");
        }
    }
    route(router) {
        router.route("/api/players")
            .post(function (req, res) {
        })
            .get(function (req, res) {
        });
        router.route("/api/players/:player_id")
            .get(function (req, res) {
        })
            .put(function (req, res) {
        })
            .delete(function (req, res) {
        });
        router.route("/api/players/:player_id/hands")
            .post(function (req, res) {
        })
            .get(function (req, res) {
        });
    }
    static route(router) {
        Players._instance.route(router);
    }
}
Players._instance = new Players();
exports.Players = Players;
