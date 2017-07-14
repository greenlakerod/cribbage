import * as tedious from 'tedious';
import * as Cribbage from '../../cribbage';
import {IEntityBaseRepository} from './entityBaseRepository';
import {EntityBaseRepository} from './entityBaseRepository';

export class CardRepository extends EntityBaseRepository<Cribbage.ICard> {

    constructor() {
        super();
        this._tableName = "dbo.Card";
    }

    protected getSqlType(property: string): tedious.TediousType {
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