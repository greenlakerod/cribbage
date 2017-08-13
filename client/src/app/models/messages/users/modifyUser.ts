import * as Messages from "../../messages";
import {User} from "../../../models";

export interface IRequest extends Messages.IRequest {
    user: User;
}
export interface IResponse extends Messages.IResponse {
    isSuccess: boolean;
    error: Error;
}