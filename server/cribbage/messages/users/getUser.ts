import * as Messages from '../../messages';
import {IUser} from '../../../cribbage';

export interface IRequest extends Messages.IRequest {
    userId: string;
}
export interface IResponse extends Messages.IResponse {
    user: IUser;
}