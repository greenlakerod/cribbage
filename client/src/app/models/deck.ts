import {Card} from "../models/card";

export class Deck {
    private _cards: Array<Card>;
    private _cutCard: Card;

    get topCard(): Card {
        return this._cards.length > 0 ? this._cards[0] : null;
    }
    get cardIds(): string {
        let s = "";
        this._cards.forEach(function(card, index, array) {
            if (index > 0) {
                s += ",";
            }
            s += card.id;
        });
        return s;
    }
    get cutCard(): Card {
        return this._cutCard;
    }

    constructor(cards?: Array<Card>) {
        if (cards) {
            this._cards = cards;
            //this.shuffle();
        }
    }

    public deal(): Card {
        return (this._cards.length > 0) ? this._cards.shift() : null;
    }
    public shuffle(): void {
        //http://en.wikipedia.org/wiki/Fisher-Yates_shuffle
        for (let i = this._cards.length-1; i>0; i--) {
            let j = getRandomInt(0, i+1);
            let temp: Card = this._cards[i];
            this._cards[i] = this._cards[j];
            this._cards[j] = temp;
        }

        function getRandomInt(min: number, max: number): number {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
    }
    public cut(index: number): Card {
        let bottom = this._cards.slice(index);
        for (let i=0; i<index; i++) {
            bottom.push(this._cards[i]);
        }
        this._cards = bottom;

        return this.deal();
    }
}