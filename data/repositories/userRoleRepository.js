"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tedious = require("tedious");
const entityBaseRepository_1 = require("./entityBaseRepository");
class UserRoleRepository extends entityBaseRepository_1.EntityBaseRepository {
    constructor() {
        super();
        this._tableName = "dbo.UserRole";
    }
    getSqlType(property) {
        switch (property.toLowerCase()) {
            case "id":
            case "userid":
            case "roleid":
                return tedious.TYPES.UniqueIdentifier;
            default:
                return tedious.TYPES.Null;
        }
    }
}
exports.UserRoleRepository = UserRoleRepository;
