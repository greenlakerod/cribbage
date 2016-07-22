define(["require", "exports", "./mainControllers"], function (require, exports, mainCtrlsModule) {
    "use strict";
    var cribbageApp = (function () {
        function cribbageApp() {
            var ngApp = angular.module('cribbageApp', ["ngRoute", "ngSanitize", "ui.bootstrap", "mainControllers"]);
            var mainCtrls = new mainCtrlsModule.mainControllers();
        }
        return cribbageApp;
    }());
    exports.cribbageApp = cribbageApp;
});
//# sourceMappingURL=cribbageApp.js.map