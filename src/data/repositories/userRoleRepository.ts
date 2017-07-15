import * as tedious from "tedious";
import * as Cribbage from "../../cribbage";
import {IEntityBaseRepository} from "./entityBaseRepository";
import {EntityBaseRepository} from "./entityBaseRepository";

export class UserRoleRepository extends EntityBaseRepository<Cribbage.IUserRole> {

    constructor() {
        super();
        this._tableName = "dbo.UserRole";
    }

    protected getSqlType(property: string): tedious.TediousType {
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