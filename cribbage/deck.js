"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Deck {
    get topCard() {
        return this._cards.length > 0 ? this._cards[0] : null;
    }
    get cardIds() {
        var s = "";
        this._cards.forEach(function (card, index, array) {
            if (index > 0) {
                s += ",";
            }
            s += card.id;
        });
        return s;
    }
    get cutCard() {
        return this._cutCard;
    }
    constructor(cards) {
        if (cards) {
            this._cards = cards;
        }
    }
    deal() {
        return (this._cards.length > 0) ? this._cards.shift() : null;
    }
    shuffle() {
        for (var i = this._cards.length - 1; i > 0; i--) {
            var j = getRandomInt(0, i + 1);
            var temp = this._cards[i];
            this._cards[i] = this._cards[j];
            this._cards[j] = temp;
        }
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
    }
    cut(index) {
        var bottom = this._cards.slice(index);
        for (var i = 0; i < index; i++) {
            bottom.push(this._cards[i]);
        }
        this._cards = bottom;
        return this.deal();
    }
}
exports.Deck = Deck;
