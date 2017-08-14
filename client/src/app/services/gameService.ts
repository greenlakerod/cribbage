import * as firebase from "firebase";
import {Injectable} from "@angular/core";
import {Game, Match, Player} from "../../app/models";

export class GameService {
    private static _instance: GameService = new GameService();

    public static get instance(): GameService {
        return GameService._instance;
    }

    constructor() {
        if (GameService._instance) {
            throw new Error("Instantiation error");
        }
    }

    public createGame(userIds: Array<string>, matchId: string): Promise<Game> {
        return new Promise((resolve, reject) => {
            let dbRef = firebase.database().ref();
            let updates = {};
            let gameId = dbRef.child("games").push().key;
            let game: Game = new Game(gameId, matchId);

            let playerIds: Array<string> = [];
            userIds.forEach((userId) => {
                let playerId = dbRef.child("players").push().key;
                let player: Player = new Player(playerId, userId, gameId);
                updates["/players/" + playerId] = player;
            });

            updates["/games/" + gameId] = game;
            dbRef.update(updates).then(() => {
                return resolve(game);
            }).catch((e) => {
                return reject(e);
            });
        });
    }
    public getGameIds(matchId: string): void {
    }
    public getGames(gameIds: Array<string>): void { 
    }
    public updateGame(): void {
    }
    public deleteGame(): void {
    }
    public judge(): void {
    }
    public play(): void {
    }
    public show(): void {
    }
    public declare(): void {
    }
    public respond(): void {
    }
}