import * as Messages from '../../messages';
import {IUser} from '../../../cribbage';

export interface IRequest extends Messages.IRequest {
    user: IUser;
}
export interface IResponse extends Messages.IResponse {
    isSuccess: boolean;
    error: Error;
}