import {Common} from "../common";

export class PlayerHand {
    constructor(
        public id: string = Common.Guid.newGuid(),
        public gameHandId: string,
        public playerId: string,
        public isCrib: boolean,
        public cardIds: Array<string>,
        public playedCardIds: string
    ){}
}