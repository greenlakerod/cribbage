import * as Messages from "../../messages";
import {User} from "../../../models";

export interface IRequest extends Messages.IRequest {
}
export interface IResponse extends Messages.IResponse {
    users: Array<User>;
}