import * as tedious from "tedious";
import * as Cribbage from "../../cribbage";
import {IEntityBaseRepository} from "./entityBaseRepository";
import {EntityBaseRepository} from "./entityBaseRepository";

export class PlayerRepository extends EntityBaseRepository<Cribbage.IPlayer> {

    constructor() {
        super();
        this._tableName = "dbo.Player";
    }

    protected getSqlType(property: string): tedious.TediousType {
        switch (property.toLowerCase()) {
            case "id":
            case "gameid":
            case "userid":
            case "cribid":
            case "currenthandid":
                return tedious.TYPES.UniqueIdentifier;
            case "gameorder":
            case "gametotal":
                return tedious.TYPES.Int;
            default:
                return tedious.TYPES.Null;
        }
    }
}