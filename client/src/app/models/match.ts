import {Common} from "../common";
import {MatchState} from "../models/enums";
import {Model} from "../models/modelBase";

export class Match extends Model {
    constructor(
        public id: string = Common.Guid.newGuid(),
        public maxGames: number = 1,
        public state: MatchState = MatchState.New,
        public gameIds: Array<string> = [],
        public currentGameId: string = ""
    ){
        super(id);
    }
}