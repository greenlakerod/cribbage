"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tedious = require("tedious");
const entityBaseRepository_1 = require("./entityBaseRepository");
class GameHandRepository extends entityBaseRepository_1.EntityBaseRepository {
    constructor() {
        super();
        this._tableName = "dbo.GameHand";
    }
    getSqlType(property) {
        switch (property.toLowerCase()) {
            case "id":
            case "cribid":
            case "lastplayerid":
            case "currentplayerid":
            case "cutcardid":
                return tedious.TYPES.UniqueIdentifier;
            case "cardids":
            case "playedcardids":
                return tedious.TYPES.NVarChar;
            case "state":
            case "index":
            case "gocount":
            case "matchingcardvaluecount":
                return tedious.TYPES.Int;
            default:
                return tedious.TYPES.Null;
        }
    }
}
exports.GameHandRepository = GameHandRepository;
