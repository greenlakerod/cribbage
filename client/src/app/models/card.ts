import {Suit} from "../models/enums/suit";
import {CardScore, CardValue} from "../models/enums";

export class Card {
    constructor(
        public id: string,
        public suit: Suit,
        public value: CardValue,
        public points: CardScore
    ){}

}