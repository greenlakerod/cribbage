import {Common} from "../common";
import {GameState} from "../models/enums";

export class Game {
    constructor(
        public id: string = Common.Guid.newGuid(),
        public matchId : string,
        public index: number,
        public state: GameState,
        public allowMuggins : boolean,
        public currentHandId? : string,
        public currentDealerId? : string
    ){}
}