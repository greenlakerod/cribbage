define(["require", "exports"], function (require, exports) {
    "use strict";
    var configRouter = (function () {
        function configRouter() {
        }
        ;
        configRouter.prototype.configure = function ($routeProvider, $locationProvider) {
            $routeProvider.when("/Register", {
                templateUrl: "PartialViews/Register.html",
                controller: "RegisterController"
            }).when("/Buddies", {
                templateUrl: "PartialViews/Buddies.html",
                controller: "BuddiesController"
            }).when("/Share", {
                templateUrl: "PartialViews/Share.html",
                controller: "ShareController"
            }).otherwise({
                redirectTo: "/"
            });
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        };
        return configRouter;
    }());
    exports.configRouter = configRouter;
});
//# sourceMappingURL=configRouter.js.map