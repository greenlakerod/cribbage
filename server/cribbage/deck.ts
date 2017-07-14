import {ICard} from '../cribbage';

export class Deck {
    private _cards: Array<ICard>;
    private _cutCard: ICard;

    get topCard(): ICard {
        return this._cards.length > 0 ? this._cards[0] : null;
    }
    get cardIds(): string {
        var s = "";
        this._cards.forEach(function(card, index, array){
            if (index > 0) {
                s += ",";
            }
            s += card.id;
        });
        return s;
    }
    get cutCard(): ICard {
        return this._cutCard;
    }

    constructor(cards?: Array<ICard>) {
        if (cards) {
            this._cards = cards;
            //this.shuffle();
        }
    }

    public deal(): ICard {
        return (this._cards.length > 0) ? this._cards.shift() : null;
    }
    public shuffle(): void {
        //http://en.wikipedia.org/wiki/Fisher-Yates_shuffle
        for (var i = this._cards.length-1; i>0; i--) {
            var j = getRandomInt(0, i+1);
            var temp:ICard = this._cards[i];
            this._cards[i] = this._cards[j];
            this._cards[j] = temp;
        }

        function getRandomInt(min:number, max:number): number {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
    }
    public cut(index: number): ICard {
        var bottom = this._cards.slice(index);
        for (var i=0; i<index; i++) {
            bottom.push(this._cards[i]);
        }
        this._cards = bottom;

        return this.deal();
    }
}