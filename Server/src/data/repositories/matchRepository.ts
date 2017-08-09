import * as tedious from "tedious";
import * as Cribbage from "../../cribbage";
import {IEntityBaseRepository} from "./entityBaseRepository";
import {EntityBaseRepository} from "./entityBaseRepository";

export class MatchRepository extends EntityBaseRepository<Cribbage.IMatch> {

    constructor() {
        super();
        this._tableName = "dbo.Match";
    }

    protected getSqlType(property: string): tedious.TediousType {
        switch (property.toLowerCase()) {
            case "id":
            case "currentgameid":
                return tedious.TYPES.UniqueIdentifier;
            case "state":
                return tedious.TYPES.Int;
            default:
                return tedious.TYPES.Null;
        }
    }
}