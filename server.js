'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var twilio = require('twilio');
var firebase = require('firebase');
var request = require('request');

var app = express();
var port = 8080;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var firebaseUrl = 'https://zappi-text.firebaseio.com/numbers/';

app.listen(port);