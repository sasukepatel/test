//import express for webserver
var express = require('express')

//import apiai library
var apiai = require('apiai');
var apiapp = apiai("0643dbf8dfb94a69ac438d95609717a8");

//import servicenowapi file
var snapi = require("./servicenowapi.js");

//instantiate express
var app = express()


app.get('/', function (req, res) {
    snapi.acceptChat();
  //snapi.getQueues();
  var request = apiapp.textRequest('Hello', {
    sessionId: '12345'
});
 
request.on('response', function(response) {
   // console.log(response);
    res.send(response)
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end();
})

app.listen(process.env.PORT, function () {
  console.log('Server running!')
})


