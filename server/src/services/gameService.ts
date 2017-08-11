import * as Cribbage from "../cribbage";
import * as Data from "../data";

export class GameService {
    private static _instance: GameService = new GameService();
    private _gameRepository: Data.Repositories.IGameRepository;
    private _gameHandRepository: Data.Repositories.IEntityBaseRepository<Cribbage.IGameHand>;

    constructor() {
        if (GameService._instance) {
            throw new Error("Instantiation error");
        }

        this._gameRepository = new Data.Repositories.GameRepository();
        this._gameHandRepository = new Data.Repositories.GameHandRepository();
    }

    public static createGame(): void {
    
    }
    public static getGame(gameId: string): void {

    }
    public static getGames(matchId: string): void {
        
    }
    public static judge(): void {

    }
    public static play(): void {

    }
    public static show(): void {

    }
    public static declare(): void {

    }
    public static respond(): void {

    }
}