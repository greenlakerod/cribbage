import {Common} from "../common";
import {Model} from "../models/modelBase";

export class Player extends Model {
    constructor(
        public id: string = Common.Guid.newGuid(),
        public userId: string,
        public gameId?: string,
        public cribId?: string,
        public currentHandId?: string,
        public gameOrder? : number,
        public gameTotal? : number,
    ){
        super(id);
    }
}