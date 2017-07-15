"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tedious = require("tedious");
const entityBaseRepository_1 = require("./entityBaseRepository");
class CardRepository extends entityBaseRepository_1.EntityBaseRepository {
    constructor() {
        super();
        this._tableName = "dbo.Card";
    }
    getSqlType(property) {
        switch (property.toLowerCase()) {
            case "id":
                return tedious.TYPES.UniqueIdentifier;
            case "suit":
            case "value":
            case "points":
                return tedious.TYPES.Int;
            default:
                return tedious.TYPES.Null;
        }
    }
}
exports.CardRepository = CardRepository;
