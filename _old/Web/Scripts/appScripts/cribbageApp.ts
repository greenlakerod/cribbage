"use strict";

import mainCtrlsModule = require("./mainControllers");

export class cribbageApp {
    constructor() {
        var ngApp = angular.module('cribbageApp', ["ngRoute", "ngSanitize", "ui.bootstrap", "mainControllers"]);
        var mainCtrls = new mainCtrlsModule.mainControllers(); 
    }
}