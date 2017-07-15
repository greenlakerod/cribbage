/// <reference path="../../typings/tsd.d.ts" />
import * as fs from "fs";
import * as tedious from "tedious";
import * as Cribbage from "../cribbage";

export interface IAppConfig extends Cribbage.IObject {
    port: number;
    dbConfig?: tedious.ConnectionConfig;
}

export class Configuration implements IAppConfig {
    private static _instance: Configuration = new Configuration();
    public port: number;
    public dbConfig: tedious.ConnectionConfig;

    public static port(): number {
        return Configuration._instance.port;
    }
    public static dbConfig(): tedious.ConnectionConfig {
        return Configuration._instance.dbConfig;
    }

    constructor() {
        if (Configuration._instance) {
            throw new Error("Instantiation failed.");
        }

        var appConfigFile = "../app.config.json";
        if (fs.existsSync(appConfigFile)) {
            var o = <IAppConfig>JSON.parse(fs.readFileSync(appConfigFile).toString());
            this.port = o.port;
            this.dbConfig = o.dbConfig;
        }      
    }
}