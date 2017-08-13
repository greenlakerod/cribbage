import {Common} from "../common";

export class Player {
    constructor(
        public id: string = Common.Guid.newGuid(),
        public gameId : string,
        public userId: string,
        public cribId?: string,
        public currentHandId?: string,
        public gameOrder? : number,
        public gameTotal? : number,
    ){}
}