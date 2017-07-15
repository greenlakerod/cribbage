import * as Repositories from "./data/repositories";
import * as tedious from "tedious";

export interface ISqlParam {
    name: string;
    type: tedious.TediousType;
    value: any;
}

export {Repositories};