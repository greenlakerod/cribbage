'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        this.source = './Scripts/';
        this.sourceApp = this.source + 'ts/app/';

        this.tsOutputPath = this.source + '/js';
        this.allJavaScript = [this.source + '/js/**/*.js'];
        this.allTypeScript = this.sourceApp + '/**/*.ts';

        this.typings = './Scripts/ts/typings/';
        this.libraryTypeScriptDefinitions = './Scripts/ts/typings/main/**/*.ts';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;