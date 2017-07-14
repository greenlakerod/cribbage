import * as tedious from 'tedious';
import * as Cribbage from '../../cribbage';
import {IEntityBaseRepository} from './entityBaseRepository';
import {EntityBaseRepository} from './entityBaseRepository';

export class GameHandRepository extends EntityBaseRepository<Cribbage.IGameHand> {

    constructor() {
        super();
        this._tableName = "dbo.GameHand";
    }

    protected getSqlType(property: string): tedious.TediousType {
        switch (property.toLowerCase()) {
            case "id":
            case "cribid":
            case "lastplayerid":
            case "currentplayerid":
            case "cutcardid":
                return tedious.TYPES.UniqueIdentifier;
            case "cardids":
            case "playedcardids":
                return tedious.TYPES.NVarChar;
            case "state":
            case "index":
            case "gocount":
            case "matchingcardvaluecount":
                return tedious.TYPES.Int;
            default:
                return tedious.TYPES.Null;
        }
    }
}