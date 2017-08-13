import {Common} from "../common";
import {MatchState} from "../models/enums";

export class Match {
    constructor(
        public id: string = Common.Guid.newGuid(),
        public state: MatchState,
        public currentGameId?: string
    ){}
}