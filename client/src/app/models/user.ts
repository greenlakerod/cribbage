import {Model} from "../models/modelBase";

export class User extends Model {
    constructor(
        public id: string,
        public username : string,
        public playerIds: Array<string> = []
    ){
        super(id);
    }
}