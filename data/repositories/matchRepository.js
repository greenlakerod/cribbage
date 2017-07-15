"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tedious = require("tedious");
const entityBaseRepository_1 = require("./entityBaseRepository");
class MatchRepository extends entityBaseRepository_1.EntityBaseRepository {
    constructor() {
        super();
        this._tableName = "dbo.Match";
    }
    getSqlType(property) {
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
exports.MatchRepository = MatchRepository;
