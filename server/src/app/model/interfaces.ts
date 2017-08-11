import * as Messages from "./interfaces/messages";
import {Suit, CardValue, CardScore, MatchState, GameState, GameHandState, ScoreType, ActionType, ActionResponseType} from "./enums";

export interface IObject {
    [property: string]: any;
}
export interface IModelBase {
    id?: string;
    dateCreated?: string;
}
export interface ICard extends IModelBase {
    suit: Suit;
    value: CardValue;
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
    matchId: string;
    state: GameState;
    allowMuggins: boolean;
    currentHandId?: string;
    currentDealerId?: string;
    index: number;
}
export interface IPlayer extends IModelBase {
    gameId: string;
    userId: string;
    cribId?: string;
    currentHandId?: string;
    gameOrder?: number;
    gameTotal?: number;
}
export interface IPlayerHand extends IModelBase {
    gameHandId: string;
    playerId: string;
    isCrib: boolean;
    cardIds: string;
    playedCardIds: string;
}
export interface IGameHand extends IModelBase {
    gameId: string;
    index: number;
    state: GameHandState;
    cribId?: string;
    lastPlayerId?: string;
    currentPlayerId?: string;
    cutCardId?: string;
    cardIds: string;
    playedCardIds: string;
    goCount: number;
    matchingCardValueCount: number;
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

    playCombination?: string; // ICardCombination
    showCombinations?: string; // Array<ICardCombination>
    declareScoreType?: ScoreType;
    responseToActionId?: string;
    responseType?: ActionResponseType;
    responseScoreType?: ScoreType;
}

export {Messages};