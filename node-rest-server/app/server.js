var http = require('http');

var PORT = 1337;
var IP = '127.0.0.1';

var server = http.createServer(function(request, response) {
  console.log('Serving ' + request.method + ' request to ' + request.url);
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify({}));
});

console.log('Listening on http://' + IP + ':' + PORT);
server.listen(PORT, IP);
