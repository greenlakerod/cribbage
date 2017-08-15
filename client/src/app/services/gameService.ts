import * as firebase from "firebase";
import {Injectable} from "@angular/core";
import {Game, Match, Player} from "../../app/models";

export class GameService {
    constructor() {
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
    public getGames(gameIds: Array<string>): Array<void> {
        return gameIds.map((id) => {
            firebase.database().ref().child("games").child(id).on("value", s => s);
        });
    }
    public updateGame(): void {
    }
    public deleteGame(gameId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            firebase.database().ref().child("games").child(gameId).remove().then(() => { return resolve(); })
            .catch((e) => { return reject(e); });
        });
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