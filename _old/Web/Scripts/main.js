/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-route.d.ts" />
requirejs.config({
    baseUrl: "Scripts/appScripts",
    paths: {
        "jquery": "../jquery-3.1.0.min",
        "bootstrap": "../bootstrap",
        "app": "./cribbageApp",
        "angular": "../angular",
        "ngRoute": "../angular-route",
        "ngSanitize": "../angular-sanitize",
        "mainCtrls": "./mainControllers",
        "loginCtrl": "./loginController",
        "serviceFactory": "./serviceHandler",
        "ui.bootstrap": "../angular-ui/ui-bootstrap-tpls"
    },
    shim: {
        "ngRoute": ['angular'],
        "ngSanitize": ['angular'],
        "ui.bootstrap": ['angular'],
        "bootstrap": ['jquery']
    }
});
requirejs(["app", "bootstrap", "angular", "ngRoute", "ngSanitize", "ui.bootstrap"], function (app) {
    try {
        var cribbageApp = new app.cribbageApp();
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['cribbageApp']);
        });
    }
    catch (error) {
        alert(error);
    }
});
//# sourceMappingURL=main.js.map