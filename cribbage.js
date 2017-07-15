"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Messages = require("./cribbage/messages");
exports.Messages = Messages;
var CardScore;
(function (CardScore) {
    CardScore[CardScore["None"] = 0] = "None";
    CardScore[CardScore["Ace"] = 1] = "Ace";
    CardScore[CardScore["Two"] = 2] = "Two";
    CardScore[CardScore["Three"] = 3] = "Three";
    CardScore[CardScore["Four"] = 4] = "Four";
    CardScore[CardScore["Five"] = 5] = "Five";
    CardScore[CardScore["Six"] = 6] = "Six";
    CardScore[CardScore["Seven"] = 7] = "Seven";
    CardScore[CardScore["Eight"] = 8] = "Eight";
    CardScore[CardScore["Nine"] = 9] = "Nine";
    CardScore[CardScore["Ten"] = 10] = "Ten";
    CardScore[CardScore["Jack"] = 10] = "Jack";
    CardScore[CardScore["Queen"] = 10] = "Queen";
    CardScore[CardScore["King"] = 10] = "King";
})(CardScore = exports.CardScore || (exports.CardScore = {}));
var CardValue;
(function (CardValue) {
    CardValue[CardValue["None"] = 0] = "None";
    CardValue[CardValue["Ace"] = 1] = "Ace";
    CardValue[CardValue["Two"] = 2] = "Two";
    CardValue[CardValue["Three"] = 3] = "Three";
    CardValue[CardValue["Four"] = 4] = "Four";
    CardValue[CardValue["Five"] = 5] = "Five";
    CardValue[CardValue["Six"] = 6] = "Six";
    CardValue[CardValue["Seven"] = 7] = "Seven";
    CardValue[CardValue["Eight"] = 8] = "Eight";
    CardValue[CardValue["Nine"] = 9] = "Nine";
    CardValue[CardValue["Ten"] = 10] = "Ten";
    CardValue[CardValue["Jack"] = 11] = "Jack";
    CardValue[CardValue["Queen"] = 12] = "Queen";
    CardValue[CardValue["King"] = 13] = "King";
})(CardValue = exports.CardValue || (exports.CardValue = {}));
var GameHandState;
(function (GameHandState) {
    GameHandState[GameHandState["Deal"] = 0] = "Deal";
    GameHandState[GameHandState["Play"] = 1] = "Play";
    GameHandState[GameHandState["Show"] = 2] = "Show";
    GameHandState[GameHandState["Done"] = 3] = "Done";
})(GameHandState = exports.GameHandState || (exports.GameHandState = {}));
var GameState;
(function (GameState) {
    GameState[GameState["New"] = 0] = "New";
    GameState[GameState["InProgress"] = 1] = "InProgress";
    GameState[GameState["Cancelled"] = 2] = "Cancelled";
    GameState[GameState["Finished"] = 3] = "Finished";
})(GameState = exports.GameState || (exports.GameState = {}));
var MatchState;
(function (MatchState) {
    MatchState[MatchState["New"] = 0] = "New";
    MatchState[MatchState["InProgress"] = 1] = "InProgress";
    MatchState[MatchState["Cancelled"] = 2] = "Cancelled";
    MatchState[MatchState["Finished"] = 3] = "Finished";
})(MatchState = exports.MatchState || (exports.MatchState = {}));
var ScoreType;
(function (ScoreType) {
    ScoreType[ScoreType["None"] = 0] = "None";
    ScoreType[ScoreType["Go"] = 1] = "Go";
    ScoreType[ScoreType["Fifteen"] = 2] = "Fifteen";
    ScoreType[ScoreType["Flush"] = 3] = "Flush";
    ScoreType[ScoreType["LastCard"] = 4] = "LastCard";
    ScoreType[ScoreType["Nibs"] = 5] = "Nibs";
    ScoreType[ScoreType["Nobs"] = 6] = "Nobs";
    ScoreType[ScoreType["Pair"] = 7] = "Pair";
    ScoreType[ScoreType["Quadruple"] = 8] = "Quadruple";
    ScoreType[ScoreType["Straight"] = 9] = "Straight";
    ScoreType[ScoreType["ThirtyOne"] = 10] = "ThirtyOne";
    ScoreType[ScoreType["Triple"] = 11] = "Triple";
})(ScoreType = exports.ScoreType || (exports.ScoreType = {}));
var Suit;
(function (Suit) {
    Suit[Suit["Clubs"] = 1] = "Clubs";
    Suit[Suit["Diamonds"] = 2] = "Diamonds";
    Suit[Suit["Hearts"] = 3] = "Hearts";
    Suit[Suit["Spades"] = 4] = "Spades";
})(Suit = exports.Suit || (exports.Suit = {}));
var ActionType;
(function (ActionType) {
    ActionType[ActionType["Play"] = 1] = "Play";
    ActionType[ActionType["Show"] = 2] = "Show";
    ActionType[ActionType["Declare"] = 3] = "Declare";
    ActionType[ActionType["Respond"] = 4] = "Respond";
    ActionType[ActionType["Judge"] = 5] = "Judge";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var ActionResponseType;
(function (ActionResponseType) {
    ActionResponseType[ActionResponseType["Accept"] = 1] = "Accept";
    ActionResponseType[ActionResponseType["Reject"] = 2] = "Reject";
})(ActionResponseType = exports.ActionResponseType || (exports.ActionResponseType = {}));
