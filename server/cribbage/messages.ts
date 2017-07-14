import * as Cribbage from '../cribbage';
import * as Users from './messages/users';
import * as Players from './messages/players';
import * as Matches from './messages/matches';
import * as Games from './messages/games';
import * as GamePlay from './messages/gameplay';

export interface IRequest extends Cribbage.IObject {
}
export interface IResponse extends Cribbage.IObject {
}
export {Users, Players, Matches, Games, GamePlay};