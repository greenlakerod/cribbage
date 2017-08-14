import {Common} from "../common";
import {GameState} from "../models/enums";
import {Model} from "../models/modelBase";

export class Game extends Model {
    constructor(
        public id: string = Common.Guid.newGuid(),
        public matchId : string,
        public state: GameState = GameState.New,
        public allowMuggins : boolean = false,
        public handIds: Array<string> = [],
        public currentHandId : string = "",
        public currentDealerId : string = ""
    ){
        super(id);
    }
}