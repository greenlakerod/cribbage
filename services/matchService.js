"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data = require("../data");
class MatchService {
    constructor() {
        if (MatchService._instance) {
            throw new Error("Instantiation error");
        }
        this._matchRepository = new Data.Repositories.MatchRepository();
    }
    static createMatch() {
    }
    static getMatch(matchId) {
    }
    static getMatches(userId) {
    }
}
MatchService._instance = new MatchService();
exports.MatchService = MatchService;
