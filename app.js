/*jslint node: true */
"use strict";

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
   //res.send('<h1>Hello World</h1>');

    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('chat message', function (msg) {
        console.log('Message: ' + msg);
    });


    socket.on('chat typing', function () {
        console.log('user is typing...');
    });

});


http.listen(3000, function () {
    console.log('listening on 3000');
});
