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
// todo: create tables in DB
export enum ActionType {
    Play = 1,
    Show = 2,
    Declare = 3,
    Respond = 4,
    Judge = 5
}
export enum ActionResponseType {
    Accept = 1,
    Reject = 2  // Muggins
}
