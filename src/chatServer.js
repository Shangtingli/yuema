var express = require('express');
var path = require('path');
var IO = require('socket.io');
var router = express.Router();

var app = express();
var server = require('http').Server(app);
app.use(express.static(path.join(__dirname, 'components/Chatroom/')));
app.set('views', path.join(__dirname, 'components/Chatroom/views'));
app.set('view engine', 'hbs');


var socketIO = IO(server);
var roomInfo = {};

socketIO.on('connection', function (socket) {
    var url = socket.request.headers.referer;
    var splited = url.split('/');
    var roomID = splited[splited.length - 1];   // 获取房间ID
    var user = '';

    socket.on('join', function (userName) {
        user = userName;
        if (!roomInfo[roomID]) {
            roomInfo[roomID] = [];
        }
        roomInfo[roomID].push(user);

        socket.join(roomID);
        socketIO.to(roomID).emit('sys', user + ': Enter Chatroom', roomInfo[roomID]);
        console.log(user + ' Enter ' + roomID);
    });

    socket.on('leave', function () {
        socket.emit('disconnect');
    });

    socket.on('disconnect', function () {
        var index = roomInfo[roomID].indexOf(user);
        if (index !== -1) {
            roomInfo[roomID].splice(index, 1);
        }

        socket.leave(roomID);
        socketIO.to(roomID).emit('sys', user + ': Exit Chatroom', roomInfo[roomID]);
        console.log(user + ' Exit ' + roomID);
    });

    socket.on('message', function (msg) {

        if (roomInfo[roomID].indexOf(user) === -1) {
            return false;
        }
        socketIO.to(roomID).emit('msg', user, msg);
    });

});

// room page
router.get('/room/:roomID', function (req, res) {
    var roomID = req.params.roomID;

    res.render('room', {
        roomID: roomID,
        users: roomInfo[roomID],
    });
});

app.use('/', router);

server.listen(4000, function () {
    console.log('server listening on port 4000');
});