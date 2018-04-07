var express = require('express');
var http = require('http');
var path = require('path');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var cors = require('cors');
var totalUsers = 0;
var users = [];
var roles = [];
var clients = {}
app.use(cors());

io.origins('*:*') // for latest version

const port = 8081;//Creating A Constant For Providing The Port

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  next();
});
http.listen(port, function () {
  console.log('listening on port 8081')
});

io.on('connection', function(socket){
  clients[socket.id] = socket;
  totalUsers ++;
  socket.emit('names', users);
  socket.emit('roles', roles);

  socket.on('disconnect', function() {
    totalUsers --;
    var index = users.findIndex(i => i.name === socket.userName);
    if (index > -1) {
      users.splice(index, 1);
    }
    io.emit('names', users);

    var index = roles.findIndex(i => i.role === socket.role);
    if (index > -1) {
      roles.splice(index, 1);
    }
    io.emit('roles', roles);

    delete clients[socket.id];
  });

  socket.on('name_confirmed', function(name){
    users.push({id: socket.id, name: name});
    socket.userName = name;
    io.emit('names', users);
  });

  socket.on('roles', function(role){
    roles.push({id: socket.id, role: role});
    socket.role = role;
    io.emit('roles', roles);
  });

  socket.on('role_selected', function(role){
    io.emit('roleSelected', role);
  });
});

console.log("Server Running At:localhost:"+port);
