/*jslint node: true, nomen: true */
'use strict';

var app = require('express')();
var http = require('http').Server(app);

app.get('/', function (req, res) {
    res.send('<h2>Hello world!</h2>');
});

http.listen(3001, function () {
    console.log('Server is running on port 3001.');
});