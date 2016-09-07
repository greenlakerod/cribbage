import * as Cribbage from '../cribbage';
import * as Data from '../data';

export class CardService {
    private static _instance: CardService = new CardService();

    constructor() {
        if (CardService._instance) {
            throw new Error("Instantiation failed");
        }
    }

    public newDeck(): void {

    }

    public shuffle(): void {
        
    }
}