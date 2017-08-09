import * as Messages from "../../messages";
import {IUser} from "../../../cribbage";

export interface IRequest extends Messages.IRequest {
}
export interface IResponse extends Messages.IResponse {
    users: Array<IUser>;
}