"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tedious = require("tedious");
const entityBaseRepository_1 = require("./entityBaseRepository");
class PlayerHandRepository extends entityBaseRepository_1.EntityBaseRepository {
    constructor() {
        super();
        this._tableName = "dbo.PlayerHand";
    }
    getSqlType(property) {
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
exports.PlayerHandRepository = PlayerHandRepository;
