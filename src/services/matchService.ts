import * as Cribbage from '../cribbage';
import * as Data from '../data';

export class MatchService {
    private static _instance: MatchService = new MatchService();
    private _matchRepository: Data.Repositories.IEntityBaseRepository<Cribbage.IMatch>;

    constructor() {
        if (MatchService._instance) {
            throw new Error("Instantiation error");
        }

        this._matchRepository = new Data.Repositories.MatchRepository();
    }

    public static createMatch(): void {

    }
    public static getMatch(matchId: string): void {

    }
    public static getMatches(userId: string): void {

    }
}