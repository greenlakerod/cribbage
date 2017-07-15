import * as Messages from "../../messages";

export interface IRequest extends Messages.IRequest {
    username: string;
    email: string;
    password: string;
    roleIds: Array<string>;
}
export interface IResponse extends Messages.IResponse {
    userId: string;
}