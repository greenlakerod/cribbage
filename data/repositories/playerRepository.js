"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tedious = require("tedious");
const entityBaseRepository_1 = require("./entityBaseRepository");
class PlayerRepository extends entityBaseRepository_1.EntityBaseRepository {
    constructor() {
        super();
        this._tableName = "dbo.Player";
    }
    getSqlType(property) {
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
exports.PlayerRepository = PlayerRepository;
