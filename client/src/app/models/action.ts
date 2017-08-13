import {ActionType} from "../models/enums/actionType";
import {ActionResponseType, GameHandState, ScoreType} from "../models/enums";
import {CardCombination} from "../models/cardCombination";
import {Common} from "../common";

export class Action {
    constructor(
        public id: string = Common.Guid.newGuid(),
        public gameHandId: string,
        public gameHandSequence: number,
        public type: ActionType,
        public playerId?: string,
        public playerHandId?: string,
        public score?: number,
        public accepted?: boolean,
        public playCombination?: CardCombination,
        public showCombinations?: Array<CardCombination>,
        public declareScoreType?: ScoreType,
        public responseToActionId?: string,
        public responseType?: ActionResponseType,
        public responseScoreType?: ScoreType,
    ){}
}