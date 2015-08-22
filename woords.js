// woords.js

var express = require('express.io');
    //pg      = require('pg'),
    //fs      = require('fs'),
var app = express().io();    

var PORT = 3000;
app.use(express.static(__dirname));
app.get('/', function (req, res) {
  console.log(req);
  res.send('hi there.');
});

// app.use(express.static(__dirname));

var server = app.listen(PORT, function() {
  var host = server.address().address;

  console.log('Servertown: https://%s:%s', host, PORT);
});




// app.get('/', function (req, res) {
//   res.send('hi');
// });

// app.post('/', function (req, res) {
//   res.send('Post that ish.');
// });

// app.put('/first', function (req, res) {
//   res.send('got a put request at /first');
// });

// app.delete('/first', function(req, res) {
//   res.send('got a delete request at /first');
// });

// var server = app.listen(3000, function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('servertown is at http://%s:%s', host, port);
// });