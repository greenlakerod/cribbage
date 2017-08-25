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

import * as AceDiamonds from "../../assets/images/cards/AceDiamonds.png";
import * as TwoDiamonds from "../../assets/images/cards/TwoDiamonds.png";
import * as ThreeDiamonds from "../../assets/images/cards/ThreeDiamonds.png";
import * as FourDiamonds from "../../assets/images/cards/FourDiamonds.png";
import * as FiveDiamonds from "../../assets/images/cards/FiveDiamonds.png";
import * as SixDiamonds from "../../assets/images/cards/SixDiamonds.png";
import * as SevenDiamonds from "../../assets/images/cards/SevenDiamonds.png";
import * as EightDiamonds from "../../assets/images/cards/EightDiamonds.png";
import * as NineDiamonds from "../../assets/images/cards/NineDiamonds.png";
import * as TenDiamonds from "../../assets/images/cards/TenDiamonds.png";
import * as JackDiamonds from "../../assets/images/cards/JackDiamonds.png";
import * as QueenDiamonds from "../../assets/images/cards/QueenDiamonds.png";
import * as KingDiamonds from "../../assets/images/cards/KingDiamonds.png";

import * as AceHearts from "../../assets/images/cards/AceHearts.png";
import * as TwoHearts from "../../assets/images/cards/TwoHearts.png";
import * as ThreeHearts from "../../assets/images/cards/ThreeHearts.png";
import * as FourHearts from "../../assets/images/cards/FourHearts.png";
import * as FiveHearts from "../../assets/images/cards/FiveHearts.png";
import * as SixHearts from "../../assets/images/cards/SixHearts.png";
import * as SevenHearts from "../../assets/images/cards/SevenHearts.png";
import * as EightHearts from "../../assets/images/cards/EightHearts.png";
import * as NineHearts from "../../assets/images/cards/NineHearts.png";
import * as TenHearts from "../../assets/images/cards/TenHearts.png";
import * as JackHearts from "../../assets/images/cards/JackHearts.png";
import * as QueenHearts from "../../assets/images/cards/QueenHearts.png";
import * as KingHearts from "../../assets/images/cards/KingHearts.png";

import * as AceSpades from "../../assets/images/cards/AceSpades.png";
import * as TwoSpades from "../../assets/images/cards/TwoSpades.png";
import * as ThreeSpades from "../../assets/images/cards/ThreeSpades.png";
import * as FourSpades from "../../assets/images/cards/FourSpades.png";
import * as FiveSpades from "../../assets/images/cards/FiveSpades.png";
import * as SixSpades from "../../assets/images/cards/SixSpades.png";
import * as SevenSpades from "../../assets/images/cards/SevenSpades.png";
import * as EightSpades from "../../assets/images/cards/EightSpades.png";
import * as NineSpades from "../../assets/images/cards/NineSpades.png";
import * as TenSpades from "../../assets/images/cards/TenSpades.png";
import * as JackSpades from "../../assets/images/cards/JackSpades.png";
import * as QueenSpades from "../../assets/images/cards/QueenSpades.png";
import * as KingSpades from "../../assets/images/cards/KingSpades.png";

export class Card {
    constructor(
        public id: number,
        public suit: Suit,
        public value: CardValue,
        public points: CardScore,
        public img: string
    ){}

    public static AceOfHearts: Card = <Card>{ id: 1, suit: Suit.Hearts, value: CardValue.Ace, points: CardScore.Ace, img: AceHearts};
    public static TwoOfHearts: Card = <Card>{ id: 2, suit: Suit.Hearts, value: CardValue.Two, points: CardScore.Two, img: TwoHearts};
    public static ThreeOfHearts: Card = <Card>{ id: 3, suit: Suit.Hearts, value: CardValue.Three, points: CardScore.Three, img: ThreeHearts};
    public static FourOfHearts: Card = <Card>{ id: 4, suit: Suit.Hearts, value: CardValue.Four, points: CardScore.Four, img: FourHearts};
    public static FiveOfHearts: Card = <Card>{ id: 5, suit: Suit.Hearts, value: CardValue.Five, points: CardScore.Five, img: FiveHearts};
    public static SixOfHearts: Card = <Card>{ id: 6, suit: Suit.Hearts, value: CardValue.Six, points: CardScore.Six, img: SixHearts};
    public static SevenOfHearts: Card = <Card>{ id: 7, suit: Suit.Hearts, value: CardValue.Seven, points: CardScore.Seven, img: SevenHearts};
    public static EightOfHearts: Card = <Card>{ id: 8, suit: Suit.Hearts, value: CardValue.Eight, points: CardScore.Eight, img: EightHearts};
    public static NineOfHearts: Card = <Card>{ id: 9, suit: Suit.Hearts, value: CardValue.Nine, points: CardScore.Nine, img: NineHearts};
    public static TenOfHearts: Card = <Card>{ id: 10, suit: Suit.Hearts, value: CardValue.Ten, points: CardScore.Ten, img: TenHearts};
    public static JackOfHearts: Card = <Card>{ id: 11, suit: Suit.Hearts, value: CardValue.Jack, points: CardScore.Jack, img: JackHearts};
    public static QueenOfHearts: Card = <Card>{ id: 12, suit: Suit.Hearts, value: CardValue.Queen, points: CardScore.Queen, img: QueenHearts};
    public static KingOfHearts: Card = <Card>{ id: 13, suit: Suit.Hearts, value: CardValue.King, points: CardScore.King, img: KingHearts};

    public static AceOfSpades: Card = <Card>{ id: 1, suit: Suit.Spades, value: CardValue.Ace, points: CardScore.Ace, img: AceSpades};
    public static TwoOfSpades: Card = <Card>{ id: 2, suit: Suit.Spades, value: CardValue.Two, points: CardScore.Two, img: TwoSpades};
    public static ThreeOfSpades: Card = <Card>{ id: 3, suit: Suit.Spades, value: CardValue.Three, points: CardScore.Three, img: ThreeSpades};
    public static FourOfSpades: Card = <Card>{ id: 4, suit: Suit.Spades, value: CardValue.Four, points: CardScore.Four, img: FourSpades};
    public static FiveOfSpades: Card = <Card>{ id: 5, suit: Suit.Spades, value: CardValue.Five, points: CardScore.Five, img: FiveSpades};
    public static SixOfSpades: Card = <Card>{ id: 6, suit: Suit.Spades, value: CardValue.Six, points: CardScore.Six, img: SixSpades};
    public static SevenOfSpades: Card = <Card>{ id: 7, suit: Suit.Spades, value: CardValue.Seven, points: CardScore.Seven, img: SevenSpades};
    public static EightOfSpades: Card = <Card>{ id: 8, suit: Suit.Spades, value: CardValue.Eight, points: CardScore.Eight, img: EightSpades};
    public static NineOfSpades: Card = <Card>{ id: 9, suit: Suit.Spades, value: CardValue.Nine, points: CardScore.Nine, img: NineSpades};
    public static TenOfSpades: Card = <Card>{ id: 10, suit: Suit.Spades, value: CardValue.Ten, points: CardScore.Ten, img: TenSpades};
    public static JackOfSpades: Card = <Card>{ id: 11, suit: Suit.Spades, value: CardValue.Jack, points: CardScore.Jack, img: JackSpades};
    public static QueenOfSpades: Card = <Card>{ id: 12, suit: Suit.Spades, value: CardValue.Queen, points: CardScore.Queen, img: QueenSpades};
    public static KingOfSpades: Card = <Card>{ id: 13, suit: Suit.Spades, value: CardValue.King, points: CardScore.King, img: KingSpades};

    public static AceOfDiamonds: Card = <Card>{ id: 1, suit: Suit.Diamonds, value: CardValue.Ace, points: CardScore.Ace, img: AceDiamonds};
    public static TwoOfDiamonds: Card = <Card>{ id: 2, suit: Suit.Diamonds, value: CardValue.Two, points: CardScore.Two, img: TwoDiamonds};
    public static ThreeOfDiamonds: Card = <Card>{ id: 3, suit: Suit.Diamonds, value: CardValue.Three, points: CardScore.Three, img: ThreeDiamonds};
    public static FourOfDiamonds: Card = <Card>{ id: 4, suit: Suit.Diamonds, value: CardValue.Four, points: CardScore.Four, img: FourDiamonds};
    public static FiveOfDiamonds: Card = <Card>{ id: 5, suit: Suit.Diamonds, value: CardValue.Five, points: CardScore.Five, img: FiveDiamonds};
    public static SixOfDiamonds: Card = <Card>{ id: 6, suit: Suit.Diamonds, value: CardValue.Six, points: CardScore.Six, img: SixDiamonds};
    public static SevenOfDiamonds: Card = <Card>{ id: 7, suit: Suit.Diamonds, value: CardValue.Seven, points: CardScore.Seven, img: SevenDiamonds};
    public static EightOfDiamonds: Card = <Card>{ id: 8, suit: Suit.Diamonds, value: CardValue.Eight, points: CardScore.Eight, img: EightDiamonds};
    public static NineOfDiamonds: Card = <Card>{ id: 9, suit: Suit.Diamonds, value: CardValue.Nine, points: CardScore.Nine, img: NineDiamonds};
    public static TenOfDiamonds: Card = <Card>{ id: 10, suit: Suit.Diamonds, value: CardValue.Ten, points: CardScore.Ten, img: TenDiamonds};
    public static JackOfDiamonds: Card = <Card>{ id: 11, suit: Suit.Diamonds, value: CardValue.Jack, points: CardScore.Jack, img: JackDiamonds};
    public static QueenOfDiamonds: Card = <Card>{ id: 12, suit: Suit.Diamonds, value: CardValue.Queen, points: CardScore.Queen, img: QueenDiamonds};
    public static KingOfDiamonds: Card = <Card>{ id: 13, suit: Suit.Diamonds, value: CardValue.King, points: CardScore.King, img: KingDiamonds};

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