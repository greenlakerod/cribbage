define(["require", "exports", "serviceHandler", "loginController", "configRouter", "registerController"], function (require, exports, serviceModule, loginCtrlModule, routerModule, regCtrlModule) {
    "use strict";
    var mainControllers = (function () {
        function mainControllers() {
            var app = angular.module("mainControllers", []);
            var router = new routerModule.configRouter();
            app.config(router.configure);
            var serviceHandler = new serviceModule.serviceHandler();
            var serviceMod = app.factory("services", ["$http", serviceModule.exportService]);
            app.controller('MainController', function ($location, services) { return new loginCtrlModule.loginController($location, services, serviceHandler); });
            app.controller('RegisterController', function ($scope, $location, services) { return new regCtrlModule.registerController($scope, $location, serviceHandler); });
        }
        return mainControllers;
    }());
    exports.mainControllers = mainControllers;
});
//# sourceMappingURL=mainControllers.js.map