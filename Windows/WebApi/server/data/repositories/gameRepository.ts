import * as tedious from 'tedious';
import * as Cribbage from '../../cribbage';
import {IEntityBaseRepository} from './entityBaseRepository';
import {EntityBaseRepository} from './entityBaseRepository';

export class GameRepository extends EntityBaseRepository<Cribbage.IGame> {

    constructor() {
        super();
        this._tableName = "dbo.Game";
    }

    protected getSqlType(property: string): tedious.TediousType {
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