import * as firebase from "firebase";
import {Injectable} from "@angular/core";
import {Game, Match, Player} from "../../app/models";
import {GameService} from "../../app/services";

export class MatchService {
    // private static _instance: MatchService = new MatchService();

    // public static get instance(): MatchService {
    //     return MatchService._instance;
    // }

    constructor() {
        // if (MatchService._instance) {
        //     throw new Error("Instantiation error");
        // }
    }

    public createMatch(userIds: Array<string>, maxGames: number = 1): Promise<Match> {
        return new Promise((resolve, reject) => {
            let dbRef = firebase.database().ref();
            let updates = {};
            let matchId = dbRef.child("matches").push().key;
            let match: Match = new Match(matchId, maxGames);
            
            new GameService().createGame(userIds, matchId) //GameService.instance.createGame(userIds, matchId)
                .then((game: Game) => {
                    match.gameIds.push(game.id);
                    match.currentGameId = game.id;

                    updates["/matches/" + matchId] = match;
                    dbRef.update(updates).then(() => {
                        return resolve(match);
                    }).catch((e) => {
                        return reject(e);
                    });
                }).catch((e) => {
                    return reject(e);
                });
        });
    }
    public updateMatch(match: Match): firebase.Promise<any> {
        let updates = {};
        updates["/matches/" + match.id] = match;

        return firebase.database().ref().update(updates);
    }
    public getMatch(matchId: string): void {
    }
    public getUserMatches(userId: string): void {
    }
    public deleteMatch(): void {
    }
}