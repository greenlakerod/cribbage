import {Card} from "../models/card";

export class Deck {
    private _cards: Array<Card>;
    private _cutCard: Card;

    get topCard(): Card {
        return this._cards.length > 0 ? this._cards[0] : null;
    }
    get cards(): Array<Card> {
        return this._cards;
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
        } else {
            let suits = {
                clubs: [Card.AceOfClubs, Card.TwoOfClubs, Card.ThreeOfClubs, Card.FourOfClubs, Card.FiveOfClubs, Card.SixOfClubs, Card.SevenOfClubs, Card.EightOfClubs, Card.NineOfClubs, Card.TenOfClubs, Card.JackOfClubs, Card.QueenOfClubs, Card.KingOfClubs],
                diamonds: [Card.AceOfDiamonds, Card.TwoOfDiamonds, Card.ThreeOfDiamonds, Card.FourOfDiamonds, Card.FiveOfDiamonds, Card.SixOfDiamonds, Card.SevenOfDiamonds, Card.EightOfDiamonds, Card.NineOfDiamonds, Card.TenOfDiamonds, Card.JackOfDiamonds, Card.QueenOfDiamonds, Card.KingOfDiamonds],
                hearts: [Card.AceOfHearts, Card.TwoOfHearts, Card.ThreeOfHearts, Card.FourOfHearts, Card.FiveOfHearts, Card.SixOfHearts, Card.SevenOfHearts, Card.EightOfHearts, Card.NineOfHearts, Card.TenOfHearts, Card.JackOfHearts, Card.QueenOfHearts, Card.KingOfHearts],
                spades: [Card.AceOfSpades, Card.TwoOfSpades, Card.ThreeOfSpades, Card.FourOfSpades, Card.FiveOfSpades, Card.SixOfSpades, Card.SevenOfSpades, Card.EightOfSpades, Card.NineOfSpades, Card.TenOfSpades, Card.JackOfSpades, Card.QueenOfSpades, Card.KingOfSpades]
            }
            this._cards = suits.clubs.concat(suits.diamonds).concat(suits.hearts).concat(suits.spades);
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