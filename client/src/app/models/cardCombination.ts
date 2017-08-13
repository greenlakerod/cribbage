import {ScoreType} from "../models/enums";

export class CardCombination {
    constructor(
        public cardIds: Array<string>,
        public scoreType: ScoreType,
        points: number,
    ){}
}