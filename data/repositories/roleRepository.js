"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tedious = require("tedious");
const entityBaseRepository_1 = require("./entityBaseRepository");
class RoleRepository extends entityBaseRepository_1.EntityBaseRepository {
    constructor() {
        super();
        this._tableName = "dbo.Role";
    }
    getSqlType(property) {
        switch (property.toLowerCase()) {
            case "id":
                return tedious.TYPES.UniqueIdentifier;
            case "name":
                return tedious.TYPES.NVarChar;
            default:
                return tedious.TYPES.Null;
        }
    }
}
exports.RoleRepository = RoleRepository;
