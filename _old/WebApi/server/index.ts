/// <reference path="../typings/tsd.d.ts" />

import express = require('express');
import bodyParser = require('body-parser');
import * as Settings from './settings';
import * as Routes from './routes';

var router = express.Router();
Routes.Matches.route(router);
Routes.Games.route(router);
Routes.Users.route(router);
Routes.Players.route(router);

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", router);

var port: number = process.env.PORT || Settings.Configuration.port() || 8080;

var server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});


