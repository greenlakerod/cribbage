"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data = require("../data");
class CardService {
    constructor() {
        if (CardService._instance) {
            throw new Error("Instantiation failed");
        }
        this._cardRepository = new Data.Repositories.CardRepository();
    }
    static getCards(cardIds, onCardsRetrieved, onError) {
        this._instance._cardRepository.getAll(cardIds, onCardsRetrieved, onError);
    }
}
CardService._instance = new CardService();
exports.CardService = CardService;
