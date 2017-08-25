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

    public get title(): string {
        return `${CardValue[this.value]} of ${Suit[this.suit]}`;
    }

    public static AceOfHearts: Card = new Card(1, Suit.Hearts, CardValue.Ace, CardScore.Ace, AceHearts);
    public static TwoOfHearts: Card = new Card(2, Suit.Hearts, CardValue.Two, CardScore.Two, TwoHearts);
    public static ThreeOfHearts: Card = new Card(3, Suit.Hearts, CardValue.Three, CardScore.Three, ThreeHearts);
    public static FourOfHearts: Card = new Card(4, Suit.Hearts, CardValue.Four, CardScore.Four, FourHearts);
    public static FiveOfHearts: Card = new Card(5, Suit.Hearts, CardValue.Five, CardScore.Five, FiveHearts);
    public static SixOfHearts: Card = new Card(6, Suit.Hearts, CardValue.Six, CardScore.Six, SixHearts);
    public static SevenOfHearts: Card = new Card(7, Suit.Hearts, CardValue.Seven, CardScore.Seven, SevenHearts);
    public static EightOfHearts: Card = new Card(8, Suit.Hearts, CardValue.Eight, CardScore.Eight, EightHearts);
    public static NineOfHearts: Card = new Card(9, Suit.Hearts, CardValue.Nine, CardScore.Nine, NineHearts);
    public static TenOfHearts: Card = new Card(10, Suit.Hearts, CardValue.Ten, CardScore.Ten, TenHearts);
    public static JackOfHearts: Card = new Card(11, Suit.Hearts, CardValue.Jack, CardScore.Jack, JackHearts);
    public static QueenOfHearts: Card = new Card(12, Suit.Hearts, CardValue.Queen, CardScore.Queen, QueenHearts);
    public static KingOfHearts: Card = new Card(13, Suit.Hearts, CardValue.King, CardScore.King, KingHearts);

    public static AceOfSpades: Card = new Card(14, Suit.Spades, CardValue.Ace, CardScore.Ace, AceSpades);
    public static TwoOfSpades: Card = new Card(15, Suit.Spades, CardValue.Two, CardScore.Two, TwoSpades);
    public static ThreeOfSpades: Card = new Card(16, Suit.Spades, CardValue.Three, CardScore.Three, ThreeSpades);
    public static FourOfSpades: Card = new Card(17, Suit.Spades, CardValue.Four, CardScore.Four, FourSpades);
    public static FiveOfSpades: Card = new Card(18, Suit.Spades, CardValue.Five, CardScore.Five, FiveSpades);
    public static SixOfSpades: Card = new Card(19, Suit.Spades, CardValue.Six, CardScore.Six, SixSpades);
    public static SevenOfSpades: Card = new Card(20, Suit.Spades, CardValue.Seven, CardScore.Seven, SevenSpades);
    public static EightOfSpades: Card = new Card(21, Suit.Spades, CardValue.Eight, CardScore.Eight, EightSpades);
    public static NineOfSpades: Card = new Card(22, Suit.Spades, CardValue.Nine, CardScore.Nine, NineSpades);
    public static TenOfSpades: Card = new Card(23, Suit.Spades, CardValue.Ten, CardScore.Ten, TenSpades);
    public static JackOfSpades: Card = new Card(24, Suit.Spades, CardValue.Jack, CardScore.Jack, JackSpades);
    public static QueenOfSpades: Card = new Card(25, Suit.Spades, CardValue.Queen, CardScore.Queen, QueenSpades);
    public static KingOfSpades: Card = new Card(26, Suit.Spades, CardValue.King, CardScore.King, KingSpades);

    public static AceOfDiamonds: Card = new Card(27, Suit.Diamonds, CardValue.Ace, CardScore.Ace, AceDiamonds);
    public static TwoOfDiamonds: Card = new Card(28, Suit.Diamonds, CardValue.Two, CardScore.Two, TwoDiamonds);
    public static ThreeOfDiamonds: Card = new Card(29, Suit.Diamonds, CardValue.Three, CardScore.Three, ThreeDiamonds);
    public static FourOfDiamonds: Card = new Card(30, Suit.Diamonds, CardValue.Four, CardScore.Four, FourDiamonds);
    public static FiveOfDiamonds: Card = new Card(31, Suit.Diamonds, CardValue.Five, CardScore.Five, FiveDiamonds);
    public static SixOfDiamonds: Card = new Card(32, Suit.Diamonds, CardValue.Six, CardScore.Six, SixDiamonds);
    public static SevenOfDiamonds: Card = new Card(33, Suit.Diamonds, CardValue.Seven, CardScore.Seven, SevenDiamonds);
    public static EightOfDiamonds: Card = new Card(34, Suit.Diamonds, CardValue.Eight, CardScore.Eight, EightDiamonds);
    public static NineOfDiamonds: Card = new Card(35, Suit.Diamonds, CardValue.Nine, CardScore.Nine, NineDiamonds);
    public static TenOfDiamonds: Card = new Card(36, Suit.Diamonds, CardValue.Ten, CardScore.Ten, TenDiamonds);
    public static JackOfDiamonds: Card = new Card(37, Suit.Diamonds, CardValue.Jack, CardScore.Jack, JackDiamonds);
    public static QueenOfDiamonds: Card = new Card(38, Suit.Diamonds, CardValue.Queen, CardScore.Queen, QueenDiamonds);
    public static KingOfDiamonds: Card = new Card(39, Suit.Diamonds, CardValue.King, CardScore.King, KingDiamonds);

    public static AceOfClubs: Card = new Card(40, Suit.Clubs, CardValue.Ace, CardScore.Ace, AceClubs);
    public static TwoOfClubs: Card = new Card(41, Suit.Clubs, CardValue.Two, CardScore.Two, TwoClubs);
    public static ThreeOfClubs: Card = new Card(42, Suit.Clubs, CardValue.Three, CardScore.Three, ThreeClubs);
    public static FourOfClubs: Card = new Card(43, Suit.Clubs, CardValue.Four, CardScore.Four, FourClubs);
    public static FiveOfClubs: Card = new Card(44, Suit.Clubs, CardValue.Five, CardScore.Five, FiveClubs);
    public static SixOfClubs: Card = new Card(45, Suit.Clubs, CardValue.Six, CardScore.Six, SixClubs);
    public static SevenOfClubs: Card = new Card(46, Suit.Clubs, CardValue.Seven, CardScore.Seven, SevenClubs);
    public static EightOfClubs: Card = new Card(47, Suit.Clubs, CardValue.Eight, CardScore.Eight, EightClubs);
    public static NineOfClubs: Card = new Card(48, Suit.Clubs, CardValue.Nine, CardScore.Nine, NineClubs);
    public static TenOfClubs: Card = new Card(49, Suit.Clubs, CardValue.Ten, CardScore.Ten, TenClubs);
    public static JackOfClubs: Card = new Card(50, Suit.Clubs, CardValue.Jack, CardScore.Jack, JackClubs);
    public static QueenOfClubs: Card = new Card(51, Suit.Clubs, CardValue.Queen, CardScore.Queen, QueenClubs);
    public static KingOfClubs: Card = new Card(52, Suit.Clubs, CardValue.King, CardScore.King, KingClubs);
}