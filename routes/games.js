"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Games {
    constructor() {
        if (Games._instance) {
            throw new Error("Instantiation failed.");
        }
    }
    route(router) {
        router.route("/api/games")
            .post(function (req, res) {
        })
            .get(function (req, res) {
        });
        router.route("/api/games/:game_id")
            .get(function (req, res) {
        })
            .put(function (req, res) {
        })
            .delete(function (req, res) {
        });
        router.route("/api/games/:game_id/players")
            .post(function (req, res) {
        })
            .get(function (req, res) {
        });
        router.route("/api/games/:game_id/players/:player_id")
            .get(function (req, res) {
        })
            .put(function (req, res) {
        })
            .delete(function (req, res) {
        });
        router.route("/api/games/:game_id/hands")
            .post(function (req, res) {
        })
            .get(function (req, res) {
        });
        router.route("/api/games/:game_id/hands/:hand_id")
            .get(function (req, res) {
        })
            .put(function (req, res) {
        })
            .delete(function (req, res) {
        });
        router.route("/api/games/:game_id/hands/:hand_id/play")
            .post(function (req, res) {
        });
        router.route("/api/games/:game_id/hands/:hand_id/show")
            .post(function (req, res) {
        });
        router.route("/api/games/:game_id/hands/:hand_id/declare")
            .post(function (req, res) {
        });
        router.route("/api/games/:game_id/hands/:hand_id/respond")
            .post(function (req, res) {
        });
        router.route("/api/games/:game_id/hands/:hand_id/judge")
            .get(function (req, res) {
        });
    }
    static route(router) {
        Games._instance.route(router);
    }
}
Games._instance = new Games();
exports.Games = Games;
