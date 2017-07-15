"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tedious = require("tedious");
const entityBaseRepository_1 = require("./entityBaseRepository");
class UserRepository extends entityBaseRepository_1.EntityBaseRepository {
    constructor() {
        super();
        this._tableName = "dbo.User";
    }
    getSqlType(property) {
        switch (property.toLowerCase()) {
            case "id":
                return tedious.TYPES.UniqueIdentifier;
            case "username":
            case "hashedpassword":
            case "email":
            case "salt":
                return tedious.TYPES.NVarChar;
            case "datecreated":
                return tedious.TYPES.DateTime;
            case "islocked":
                return tedious.TYPES.Bit;
            default:
                return tedious.TYPES.Null;
        }
    }
}
exports.UserRepository = UserRepository;
