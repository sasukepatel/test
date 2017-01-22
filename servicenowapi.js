var request = require("request");

var snowtoken = "BPIeIToVPQen2e49HZqrE4dyFW9yMCTjOPoVqKWsgch-WnJZN59FmWYgu8Ii9sH77Zb2me1bsyTBpTvoMo5kvg";
var userid = 'askmenowbot';
var password = "Bot90338";

var auth = {
    'user': userid,
    'pass': password,
    'sendImmediately': false
  }

var queueid = "4c80e996db14b200f485773ebf961925";
var acceptURL = "https://dev23858.service-now.com/api/now/connect/support/queues/"+queueid+"/accept";

function acceptChat(){
    request.post(acceptURL, {
 'auth': auth
},function callback(error, response, body) {
   console.log(body);
});

}  
function getQueues(){
request.get('https://dev23858.service-now.com/api/now/connect/support/queues', {
 'auth': auth
},function callback(error, response, body) {
   console.log(body);
});
}

function sendMsg(){
    
}
exports.acceptChat = acceptChat;
exports.getQueues = getQueues;



