"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data = require("../data");
class GameService {
    constructor() {
        if (GameService._instance) {
            throw new Error("Instantiation error");
        }
        this._gameRepository = new Data.Repositories.GameRepository();
        this._gameHandRepository = new Data.Repositories.GameHandRepository();
    }
    static createGame() {
    }
    static getGame(gameId) {
    }
    static getGames(matchId) {
    }
    static judge() {
    }
    static play() {
    }
    static show() {
    }
    static declare() {
    }
    static respond() {
    }
}
GameService._instance = new GameService();
exports.GameService = GameService;
