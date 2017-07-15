"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class Configuration {
    constructor() {
        if (Configuration._instance) {
            throw new Error("Instantiation failed.");
        }
        var appConfigFile = "../app.config.json";
        if (fs.existsSync(appConfigFile)) {
            var o = JSON.parse(fs.readFileSync(appConfigFile).toString());
            this.port = o.port;
            this.dbConfig = o.dbConfig;
        }
    }
    static port() {
        return Configuration._instance.port;
    }
    static dbConfig() {
        return Configuration._instance.dbConfig;
    }
}
Configuration._instance = new Configuration();
exports.Configuration = Configuration;
