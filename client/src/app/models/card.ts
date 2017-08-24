import {Suit} from "../models/enums/suit";
import {CardScore, CardValue} from "../models/enums";

import * as AceClubs from "../../assets/images/cards/AceClubs.png";
import * as TwoClubs from "../../assets/images/cards/TwoClubs.png";
import * as ThreeClubs from "../../assets/images/cards/ThreeClubs.png";
import * as FourClubs from "../../assets/images/cards/FourClubs.png";
import * as FiveClubs from "../../assets/images/cards/FiveClubs.png";
import * as SixClubs from "../../assets/images/cards/SixClubs.png";
import * as SevenClubs from "../../assets/images/cards/SevenClubs.png";
import * as EightClubs from "../../assets/images/cards/EightClubs.png";
import * as NineClubs from "../../assets/images/cards/NineClubs.png";
import * as TenClubs from "../../assets/images/cards/TenClubs.png";
import * as JackClubs from "../../assets/images/cards/JackClubs.png";
import * as QueenClubs from "../../assets/images/cards/QueenClubs.png";
import * as KingClubs from "../../assets/images/cards/KingClubs.png";

export class Card {
    constructor(
        public id: number,
        public suit: Suit,
        public value: CardValue,
        public points: CardScore,
        public img: string
    ){}

    public static AceOfHearts: Card = <Card>{ id: 1, suit: Suit.Hearts, value: CardValue.Ace, points: CardScore.Ace, img: "hearts/Ace.png"};
    public static TwoOfHearts: Card = <Card>{ id: 2, suit: Suit.Hearts, value: CardValue.Two, points: CardScore.Two, img: "hearts/Two.png"};
    public static ThreeOfHearts: Card = <Card>{ id: 3, suit: Suit.Hearts, value: CardValue.Three, points: CardScore.Three, img: "hearts/Three.png"};
    public static FourOfHearts: Card = <Card>{ id: 4, suit: Suit.Hearts, value: CardValue.Four, points: CardScore.Four, img: "hearts/Four.png"};
    public static FiveOfHearts: Card = <Card>{ id: 5, suit: Suit.Hearts, value: CardValue.Five, points: CardScore.Five, img: "hearts/Five.png"};
    public static SixOfHearts: Card = <Card>{ id: 6, suit: Suit.Hearts, value: CardValue.Six, points: CardScore.Six, img: "hearts/Six.png"};
    public static SevenOfHearts: Card = <Card>{ id: 7, suit: Suit.Hearts, value: CardValue.Seven, points: CardScore.Seven, img: "hearts/Seven.png"};
    public static EightOfHearts: Card = <Card>{ id: 8, suit: Suit.Hearts, value: CardValue.Eight, points: CardScore.Eight, img: "hearts/Eight.png"};
    public static NineOfHearts: Card = <Card>{ id: 9, suit: Suit.Hearts, value: CardValue.Nine, points: CardScore.Nine, img: "hearts/Nine.png"};
    public static TenOfHearts: Card = <Card>{ id: 10, suit: Suit.Hearts, value: CardValue.Ten, points: CardScore.Ten, img: "hearts/Ten.png"};
    public static JackOfHearts: Card = <Card>{ id: 11, suit: Suit.Hearts, value: CardValue.Jack, points: CardScore.Jack, img: "hearts/Jack.png"};
    public static QueenOfHearts: Card = <Card>{ id: 12, suit: Suit.Hearts, value: CardValue.Queen, points: CardScore.Queen, img: "hearts/Queen.png"};
    public static KingOfHearts: Card = <Card>{ id: 13, suit: Suit.Hearts, value: CardValue.King, points: CardScore.King, img: "hearts/King.png"};

    public static AceOfSpades: Card = <Card>{ id: 1, suit: Suit.Spades, value: CardValue.Ace, points: CardScore.Ace, img: "spades/Ace.png"};
    public static TwoOfSpades: Card = <Card>{ id: 2, suit: Suit.Spades, value: CardValue.Two, points: CardScore.Two, img: "spades/Two.png"};
    public static ThreeOfSpades: Card = <Card>{ id: 3, suit: Suit.Spades, value: CardValue.Three, points: CardScore.Three, img: "spades/Three.png"};
    public static FourOfSpades: Card = <Card>{ id: 4, suit: Suit.Spades, value: CardValue.Four, points: CardScore.Four, img: "spades/Four.png"};
    public static FiveOfSpades: Card = <Card>{ id: 5, suit: Suit.Spades, value: CardValue.Five, points: CardScore.Five, img: "spades/Five.png"};
    public static SixOfSpades: Card = <Card>{ id: 6, suit: Suit.Spades, value: CardValue.Six, points: CardScore.Six, img: "spades/Six.png"};
    public static SevenOfSpades: Card = <Card>{ id: 7, suit: Suit.Spades, value: CardValue.Seven, points: CardScore.Seven, img: "spades/Seven.png"};
    public static EightOfSpades: Card = <Card>{ id: 8, suit: Suit.Spades, value: CardValue.Eight, points: CardScore.Eight, img: "spades/Eight.png"};
    public static NineOfSpades: Card = <Card>{ id: 9, suit: Suit.Spades, value: CardValue.Nine, points: CardScore.Nine, img: "spades/Nine.png"};
    public static TenOfSpades: Card = <Card>{ id: 10, suit: Suit.Spades, value: CardValue.Ten, points: CardScore.Ten, img: "spades/Ten.png"};
    public static JackOfSpades: Card = <Card>{ id: 11, suit: Suit.Spades, value: CardValue.Jack, points: CardScore.Jack, img: "spades/Jack.png"};
    public static QueenOfSpades: Card = <Card>{ id: 12, suit: Suit.Spades, value: CardValue.Queen, points: CardScore.Queen, img: "spades/Queen.png"};
    public static KingOfSpades: Card = <Card>{ id: 13, suit: Suit.Spades, value: CardValue.King, points: CardScore.King, img: "spades/King.png"};

    public static AceOfDiamonds: Card = <Card>{ id: 1, suit: Suit.Diamonds, value: CardValue.Ace, points: CardScore.Ace, img: "diamonds/Ace.png"};
    public static TwoOfDiamonds: Card = <Card>{ id: 2, suit: Suit.Diamonds, value: CardValue.Two, points: CardScore.Two, img: "diamonds/Two.png"};
    public static ThreeOfDiamonds: Card = <Card>{ id: 3, suit: Suit.Diamonds, value: CardValue.Three, points: CardScore.Three, img: "diamonds/Three.png"};
    public static FourOfDiamonds: Card = <Card>{ id: 4, suit: Suit.Diamonds, value: CardValue.Four, points: CardScore.Four, img: "diamonds/Four.png"};
    public static FiveOfDiamonds: Card = <Card>{ id: 5, suit: Suit.Diamonds, value: CardValue.Five, points: CardScore.Five, img: "diamonds/Five.png"};
    public static SixOfDiamonds: Card = <Card>{ id: 6, suit: Suit.Diamonds, value: CardValue.Six, points: CardScore.Six, img: "diamonds/Six.png"};
    public static SevenOfDiamonds: Card = <Card>{ id: 7, suit: Suit.Diamonds, value: CardValue.Seven, points: CardScore.Seven, img: "diamonds/Seven.png"};
    public static EightOfDiamonds: Card = <Card>{ id: 8, suit: Suit.Diamonds, value: CardValue.Eight, points: CardScore.Eight, img: "diamonds/Eight.png"};
    public static NineOfDiamonds: Card = <Card>{ id: 9, suit: Suit.Diamonds, value: CardValue.Nine, points: CardScore.Nine, img: "diamonds/Nine.png"};
    public static TenOfDiamonds: Card = <Card>{ id: 10, suit: Suit.Diamonds, value: CardValue.Ten, points: CardScore.Ten, img: "diamonds/Ten.png"};
    public static JackOfDiamonds: Card = <Card>{ id: 11, suit: Suit.Diamonds, value: CardValue.Jack, points: CardScore.Jack, img: "diamonds/Jack.png"};
    public static QueenOfDiamonds: Card = <Card>{ id: 12, suit: Suit.Diamonds, value: CardValue.Queen, points: CardScore.Queen, img: "diamonds/Queen.png"};
    public static KingOfDiamonds: Card = <Card>{ id: 13, suit: Suit.Diamonds, value: CardValue.King, points: CardScore.King, img: "diamonds/King.png"};

    public static AceOfClubs: Card = <Card>{ id: 1, suit: Suit.Clubs, value: CardValue.Ace, points: CardScore.Ace, img: AceClubs};
    public static TwoOfClubs: Card = <Card>{ id: 2, suit: Suit.Clubs, value: CardValue.Two, points: CardScore.Two, img: TwoClubs};
    public static ThreeOfClubs: Card = <Card>{ id: 3, suit: Suit.Clubs, value: CardValue.Three, points: CardScore.Three, img: ThreeClubs};
    public static FourOfClubs: Card = <Card>{ id: 4, suit: Suit.Clubs, value: CardValue.Four, points: CardScore.Four, img: FourClubs};
    public static FiveOfClubs: Card = <Card>{ id: 5, suit: Suit.Clubs, value: CardValue.Five, points: CardScore.Five, img: FiveClubs};
    public static SixOfClubs: Card = <Card>{ id: 6, suit: Suit.Clubs, value: CardValue.Six, points: CardScore.Six, img: SixClubs};
    public static SevenOfClubs: Card = <Card>{ id: 7, suit: Suit.Clubs, value: CardValue.Seven, points: CardScore.Seven, img: SevenClubs};
    public static EightOfClubs: Card = <Card>{ id: 8, suit: Suit.Clubs, value: CardValue.Eight, points: CardScore.Eight, img: EightClubs};
    public static NineOfClubs: Card = <Card>{ id: 9, suit: Suit.Clubs, value: CardValue.Nine, points: CardScore.Nine, img: NineClubs};
    public static TenOfClubs: Card = <Card>{ id: 10, suit: Suit.Clubs, value: CardValue.Ten, points: CardScore.Ten, img: TenClubs};
    public static JackOfClubs: Card = <Card>{ id: 11, suit: Suit.Clubs, value: CardValue.Jack, points: CardScore.Jack, img: JackClubs};
    public static QueenOfClubs: Card = <Card>{ id: 12, suit: Suit.Clubs, value: CardValue.Queen, points: CardScore.Queen, img: QueenClubs};
    public static KingOfClubs: Card = <Card>{ id: 13, suit: Suit.Clubs, value: CardValue.King, points: CardScore.King, img: KingClubs};
}