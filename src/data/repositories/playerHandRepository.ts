import * as tedious from "tedious";
import * as Cribbage from "../../cribbage";
import {IEntityBaseRepository} from "./entityBaseRepository";
import {EntityBaseRepository} from "./entityBaseRepository";

export class PlayerHandRepository extends EntityBaseRepository<Cribbage.IPlayerHand> {

    constructor() {
        super();
        this._tableName = "dbo.PlayerHand";
    }

    protected getSqlType(property: string): tedious.TediousType {
        switch (property.toLowerCase()) {
            case "id":
            case "gamehandid":
            case "playerid":
                return tedious.TYPES.UniqueIdentifier;
            case "cardids":
            case "playedcardids":
                return tedious.TYPES.NVarChar;
            case "iscrib":
                return tedious.TYPES.Bit;
            default:
                return tedious.TYPES.Null;
        }
    }
}