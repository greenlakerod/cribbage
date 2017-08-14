import {Suit} from "../models/enums/suit";
import {CardScore, CardValue} from "../models/enums";

export class Card {
    constructor(
        public id: number,
        public suit: Suit,
        public value: CardValue,
        public points: CardScore
    ){}

    public static AceOfHearts: Card = <Card>{ id: 1, suit: Suit.Hearts, value: CardValue.Ace, points: CardScore.Ace};
    public static TwoOfHearts: Card = <Card>{ id: 2, suit: Suit.Hearts, value: CardValue.Two, points: CardScore.Two};
    public static ThreeOfHearts: Card = <Card>{ id: 3, suit: Suit.Hearts, value: CardValue.Three, points: CardScore.Three};
    public static FourOfHearts: Card = <Card>{ id: 4, suit: Suit.Hearts, value: CardValue.Four, points: CardScore.Four};
    public static FiveOfHearts: Card = <Card>{ id: 5, suit: Suit.Hearts, value: CardValue.Five, points: CardScore.Five};
    public static SixOfHearts: Card = <Card>{ id: 6, suit: Suit.Hearts, value: CardValue.Six, points: CardScore.Six};
    public static SevenOfHearts: Card = <Card>{ id: 7, suit: Suit.Hearts, value: CardValue.Seven, points: CardScore.Seven};
    public static EightOfHearts: Card = <Card>{ id: 8, suit: Suit.Hearts, value: CardValue.Eight, points: CardScore.Eight};
    public static NineOfHearts: Card = <Card>{ id: 9, suit: Suit.Hearts, value: CardValue.Nine, points: CardScore.Nine};
    public static TenOfHearts: Card = <Card>{ id: 10, suit: Suit.Hearts, value: CardValue.Ten, points: CardScore.Ten};
    public static JackOfHearts: Card = <Card>{ id: 11, suit: Suit.Hearts, value: CardValue.Jack, points: CardScore.Jack};
    public static QueenOfHearts: Card = <Card>{ id: 12, suit: Suit.Hearts, value: CardValue.Queen, points: CardScore.Queen};
    public static KingOfHearts: Card = <Card>{ id: 13, suit: Suit.Hearts, value: CardValue.King, points: CardScore.King};
    public static AceOfSpades: Card = <Card>{ id: 14, suit: Suit.Spades, value: CardValue.Ace, points: CardScore.Ace};
    public static TwoOfSpades: Card = <Card>{ id: 15, suit: Suit.Spades, value: CardValue.Two, points: CardScore.Two};
    public static ThreeOfSpades: Card = <Card>{ id: 16, suit: Suit.Spades, value: CardValue.Three, points: CardScore.Three};
    public static FourOfSpades: Card = <Card>{ id: 17, suit: Suit.Spades, value: CardValue.Four, points: CardScore.Four};
    public static FiveOfSpades: Card = <Card>{ id: 18, suit: Suit.Spades, value: CardValue.Five, points: CardScore.Five};
    public static SixOfSpades: Card = <Card>{ id: 19, suit: Suit.Spades, value: CardValue.Six, points: CardScore.Six};
    public static SevenOfSpades: Card = <Card>{ id: 20, suit: Suit.Spades, value: CardValue.Seven, points: CardScore.Seven};
    public static EightOfSpades: Card = <Card>{ id: 21, suit: Suit.Spades, value: CardValue.Eight, points: CardScore.Eight};
    public static NineOfSpades: Card = <Card>{ id: 22, suit: Suit.Spades, value: CardValue.Nine, points: CardScore.Nine};
    public static TenOfSpades: Card = <Card>{ id: 23, suit: Suit.Spades, value: CardValue.Ten, points: CardScore.Ten};
    public static JackOfSpades: Card = <Card>{ id: 24, suit: Suit.Spades, value: CardValue.Jack, points: CardScore.Jack};
    public static QueenOfSpades: Card = <Card>{ id: 25, suit: Suit.Spades, value: CardValue.Queen, points: CardScore.Queen};
    public static KingOfSpades: Card = <Card>{ id: 26, suit: Suit.Spades, value: CardValue.King, points: CardScore.King};
    public static AceOfDiamonds: Card = <Card>{ id: 27, suit: Suit.Diamonds, value: CardValue.Ace, points: CardScore.Ace};
    public static TwoOfDiamonds: Card = <Card>{ id: 28, suit: Suit.Diamonds, value: CardValue.Two, points: CardScore.Two};
    public static ThreeOfDiamonds: Card = <Card>{ id: 29, suit: Suit.Diamonds, value: CardValue.Three, points: CardScore.Three};
    public static FourOfDiamonds: Card = <Card>{ id: 30, suit: Suit.Diamonds, value: CardValue.Four, points: CardScore.Four};
    public static FiveOfDiamonds: Card = <Card>{ id: 31, suit: Suit.Diamonds, value: CardValue.Five, points: CardScore.Five};
    public static SixOfDiamonds: Card = <Card>{ id: 32, suit: Suit.Diamonds, value: CardValue.Six, points: CardScore.Six};
    public static SevenOfDiamonds: Card = <Card>{ id: 33, suit: Suit.Diamonds, value: CardValue.Seven, points: CardScore.Seven};
    public static EightOfDiamonds: Card = <Card>{ id: 34, suit: Suit.Diamonds, value: CardValue.Eight, points: CardScore.Eight};
    public static NineOfDiamonds: Card = <Card>{ id: 35, suit: Suit.Diamonds, value: CardValue.Nine, points: CardScore.Nine};
    public static TenOfDiamonds: Card = <Card>{ id: 36, suit: Suit.Diamonds, value: CardValue.Ten, points: CardScore.Ten};
    public static JackOfDiamonds: Card = <Card>{ id: 37, suit: Suit.Diamonds, value: CardValue.Jack, points: CardScore.Jack};
    public static QueenOfDiamonds: Card = <Card>{ id: 38, suit: Suit.Diamonds, value: CardValue.Queen, points: CardScore.Queen};
    public static KingOfDiamonds: Card = <Card>{ id: 39, suit: Suit.Diamonds, value: CardValue.King, points: CardScore.King};
    public static AceOfClubs: Card = <Card>{ id: 40, suit: Suit.Clubs, value: CardValue.Ace, points: CardScore.Ace};
    public static TwoOfClubs: Card = <Card>{ id: 41, suit: Suit.Clubs, value: CardValue.Two, points: CardScore.Two};
    public static ThreeOfClubs: Card = <Card>{ id: 42, suit: Suit.Clubs, value: CardValue.Three, points: CardScore.Three};
    public static FourOfClubs: Card = <Card>{ id: 43, suit: Suit.Clubs, value: CardValue.Four, points: CardScore.Four};
    public static FiveOfClubs: Card = <Card>{ id: 44, suit: Suit.Clubs, value: CardValue.Five, points: CardScore.Five};
    public static SixOfClubs: Card = <Card>{ id: 45, suit: Suit.Clubs, value: CardValue.Six, points: CardScore.Six};
    public static SevenOfClubs: Card = <Card>{ id: 46, suit: Suit.Clubs, value: CardValue.Seven, points: CardScore.Seven};
    public static EightOfClubs: Card = <Card>{ id: 47, suit: Suit.Clubs, value: CardValue.Eight, points: CardScore.Eight};
    public static NineOfClubs: Card = <Card>{ id: 48, suit: Suit.Clubs, value: CardValue.Nine, points: CardScore.Nine};
    public static TenOfClubs: Card = <Card>{ id: 49, suit: Suit.Clubs, value: CardValue.Ten, points: CardScore.Ten};
    public static JackOfClubs: Card = <Card>{ id: 50, suit: Suit.Clubs, value: CardValue.Jack, points: CardScore.Jack};
    public static QueenOfClubs: Card = <Card>{ id: 51, suit: Suit.Clubs, value: CardValue.Queen, points: CardScore.Queen};
    public static KingOfClubs: Card = <Card>{ id: 52, suit: Suit.Clubs, value: CardValue.King, points: CardScore.King};
}