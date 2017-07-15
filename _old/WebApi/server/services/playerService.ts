import * as Cribbage from '../cribbage';
import * as Data from '../data';

export class PlayerService {
    private static _instance: PlayerService = new PlayerService();
    private _playerRepository: Data.Repositories.IEntityBaseRepository<Cribbage.IPlayer>;
    private _playerHandRepository: Data.Repositories.IEntityBaseRepository<Cribbage.IPlayerHand>;

    constructor() {
        if (PlayerService._instance) {
            throw new Error("Instantiation error");
        }

        this._playerRepository = new Data.Repositories.PlayerRepository();
        this._playerHandRepository = new Data.Repositories.PlayerHandRepository();
    }

    public static createPlayer(gameId: string, userId: string, onPlayerCreated: (player: Cribbage.IPlayer) => void, onError: (error: Error) => void): void {
        var player = <Cribbage.IPlayer>{
            gameId: gameId,
            userId: userId
        };
        PlayerService._instance._playerRepository.add(player, function(playerId: string) {
            player.id = playerId;
            onPlayerCreated(player);
        }, onError);
    }
    public static getPlayer(playerId: string, onPlayerRetrieved: (user: Cribbage.IPlayer) => void, onError: (error: Error) => void): void {
        PlayerService._instance._playerRepository.get(playerId, onPlayerRetrieved, onError);
    }
    public static getPlayers(userId: string): void {
        
    }
}