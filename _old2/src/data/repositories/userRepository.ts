import * as tedious from "tedious";
import * as Cribbage from "../../cribbage";
import {IEntityBaseRepository} from "./entityBaseRepository";
import {EntityBaseRepository} from "./entityBaseRepository";

export class UserRepository extends EntityBaseRepository<Cribbage.IUser> {

    constructor() {
        super();
        this._tableName = "dbo.User";
    }

    protected getSqlType(property: string): tedious.TediousType {
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