"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data = require("../data");
class PlayerService {
    constructor() {
        if (PlayerService._instance) {
            throw new Error("Instantiation error");
        }
        this._playerRepository = new Data.Repositories.PlayerRepository();
        this._playerHandRepository = new Data.Repositories.PlayerHandRepository();
    }
    static createPlayer(gameId, userId, onPlayerCreated, onError) {
        var player = {
            gameId: gameId,
            userId: userId
        };
        PlayerService._instance._playerRepository.add(player, function (playerId) {
            player.id = playerId;
            onPlayerCreated(player);
        }, onError);
    }
    static getPlayer(playerId, onPlayerRetrieved, onError) {
        PlayerService._instance._playerRepository.get(playerId, onPlayerRetrieved, onError);
    }
    static getPlayers(userId) {
    }
}
PlayerService._instance = new PlayerService();
exports.PlayerService = PlayerService;
