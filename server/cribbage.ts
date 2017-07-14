import * as Messages from './cribbage/messages';

export enum CardScore {
    None = 0,
    Ace = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Jack = 10,
    Queen = 10,
    King = 10
}
export enum CardValue {
    None = 0,
    Ace = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Jack = 11,
    Queen = 12,
    King = 13
}
export enum GameHandState {
    Deal = 0,
    Play = 1,
    Show = 2,
    Done = 3
}
export enum GameState {
    New = 0,
    InProgress = 1,
    Cancelled = 2,
    Finished = 3
}
export enum MatchState {
    New = 0,
    InProgress = 1,
    Cancelled = 2,
    Finished = 3
}
export enum ScoreType {
    None = 0,
    Go = 1,
    Fifteen = 2,
    Flush = 3,
    LastCard = 4,
    Nibs = 5,
    Nobs = 6,
    Pair = 7,
    Quadruple = 8,
    Straight = 9,
    ThirtyOne = 10,
    Triple = 11
}
export enum Suit {
    Clubs = 1,
    Diamonds = 2,
    Hearts = 3,
    Spades = 4
}

export interface IObject {
    [property: string]: any;
}
export interface IModelBase {
    id?: string;
    dateCreated?: string;
}
export interface ICard extends IModelBase {
    suit : Suit;
    value : CardValue;
    points: CardScore;
}
export interface IUser extends IModelBase {
    username: string;
    hashedPassword: string;
    email: string;
    salt: string;
    isLocked: boolean;
}
export interface IRole extends IModelBase {
    name: string;
}
export interface IUserRole extends IModelBase {
    userId: string;
    roleId: string;
}
export interface IError extends IModelBase {
    message: string;
    additionalInfo: string;
}
export interface IMatch extends IModelBase {
    state: MatchState;
    currentGameId?: string;
}
export interface IGame extends IModelBase {
    matchId : string;
    state: GameState;
    allowMuggins : boolean;
    currentHandId? : string;
    currentDealerId? : string;
    index : number;
}
export interface IPlayer extends IModelBase {
    gameId : string;
    userId: string;
    cribId?: string;
    currentHandId?: string;
    gameOrder? : number;
    gameTotal? : number;
}
export interface IPlayerHand extends IModelBase {
    gameHandId : string;
    playerId : string;
    isCrib : boolean;
    cardIds : string;
    playedCardIds : string;
}
export interface IGameHand extends IModelBase {
    gameId : string;
    index : number;
    state: GameHandState;
    cribId?: string;
    lastPlayerId?: string;
    currentPlayerId?: string;
    cutCardId? : string;
    cardIds: string;
    playedCardIds: string;
    goCount : number;
    matchingCardValueCount : number;
}

//todo: create tables in DB
export enum ActionType {
    Play = 1,
    Show = 2,
    Declare = 3,
    Respond = 4,
    Judge = 5
}
export enum ActionResponseType {
    Accept = 1,
    Reject = 2  //Muggins
}
export interface ICardCombination {
    cardIds: Array<string>;
    scoreType: ScoreType;
    points: number;
}
export interface IAction extends IModelBase {
    gameHandId: string;
    gameHandSequence: number;
    type: ActionType;
    playerId?: string;
    playerHandId?: string;
    score?: number;
    accepted?: boolean;

    playCombination?: string; //ICardCombination
    showCombinations?: string; //Array<ICardCombination>
    declareScoreType?: ScoreType;
    responseToActionId?: string;
    responseType?: ActionResponseType;
    responseScoreType?: ScoreType;
}

export {Messages};