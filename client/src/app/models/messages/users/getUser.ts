import * as Messages from "../../messages";
import {User} from "../../../models";

export interface IRequest extends Messages.IRequest {
    userId: string;
}
export interface IResponse extends Messages.IResponse {
    user: User;
}