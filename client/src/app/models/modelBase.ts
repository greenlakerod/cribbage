import {Common} from "../common";
import {MatchState} from "../models/enums";

export interface IModel {
    id: string;
}

export class Model implements IModel {
    constructor(
        public id: string = Common.Guid.newGuid()
    ){}
}