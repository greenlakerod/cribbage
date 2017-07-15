"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tedious = require("tedious");
const entityBaseRepository_1 = require("./entityBaseRepository");
class GameRepository extends entityBaseRepository_1.EntityBaseRepository {
    constructor() {
        super();
        this._tableName = "dbo.Game";
    }
    play() { }
    respond() { }
    declare() { }
    show() { }
    judgment() { }
    getSqlType(property) {
        switch (property.toLowerCase()) {
            case "id":
            case "matchid":
            case "currenthandid":
            case "currentdealerid":
                return tedious.TYPES.UniqueIdentifier;
            case "state":
            case "index":
                return tedious.TYPES.Int;
            case "allowmuggins":
                return tedious.TYPES.Bit;
            default:
                return tedious.TYPES.Null;
        }
    }
}
exports.GameRepository = GameRepository;
