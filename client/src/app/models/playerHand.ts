import {Common} from "../common";
import {Card} from "../models/card";

export class PlayerHand {
    private _cardIdMap: { [temp: string]: string } = {};

    public get cards(): Array<Card> {
        let cards: Array<Card> = [];
        this.cardIds.forEach((c) => {
            cards.push(Card.All[parseInt(c) - 1]);
        });

        return cards;
    };

    public addCard(cardId: string): void {
        this.cardIds.push(cardId);
        this._cardIdMap[Common.Guid.newGuid()] = cardId;
    }

    public getCard(uid: string): Card {
        let cardId = this._cardIdMap[uid];
        return Card.All[parseInt(cardId) - 1];
    }

    public getCardUid(index: number, card: Card): string {
        let cardId = this.cardIds[index];
        for (let key in this._cardIdMap) {
            if (this._cardIdMap[key] == cardId) {
                return key;
            }
        }

        return undefined;
    }

    constructor(
        public id: string = Common.Guid.newGuid(),
        public gameHandId: string,
        public playerId: string,
        public isCrib: boolean,
        public cardIds: Array<string>,
        public playedCardIds: string
    ){}
}