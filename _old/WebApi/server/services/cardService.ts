import * as Cribbage from '../cribbage';
import * as Data from '../data';

export class CardService {
    private static _instance: CardService = new CardService();
    private _cardRepository: Data.Repositories.IEntityBaseRepository<Cribbage.ICard>;

    constructor() {
        if (CardService._instance) {
            throw new Error("Instantiation failed");
        }

        this._cardRepository = new Data.Repositories.CardRepository();
    }

    public static getCards(cardIds: Array<string>, onCardsRetrieved: (cards: Array<Cribbage.ICard>) => void, onError: (error: Error) => void): void {
        this._instance._cardRepository.getAll(cardIds, onCardsRetrieved, onError);
    }
}