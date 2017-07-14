import * as tedious from 'tedious';
import * as Cribbage from '../../cribbage';
import {IEntityBaseRepository} from './entityBaseRepository';
import {EntityBaseRepository} from './entityBaseRepository';

export class RoleRepository extends EntityBaseRepository<Cribbage.IRole> {

    constructor() {
        super();
        this._tableName = "dbo.Role";
    }

    protected getSqlType(property: string): tedious.TediousType {
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