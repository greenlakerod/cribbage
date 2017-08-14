import {Common} from "../common";
import {GameHandState} from "../models/enums";
import {Model} from "../models/modelBase";

export class GameHand extends Model {
    constructor(
        public id: string = Common.Guid.newGuid(),
        public gameId: string,
        public index: number,
        public state: GameHandState,
        public cardIds: Array<string>,
        public playedCardIds: string,
        public goCount: number,
        public matchingCardValueCount: number,
        public currentPlayerId?: string,
        public lastPlayerId?: string,
        public cribId?: string,
        public cutCardId?: string
    ){
        super(id);
    }
}