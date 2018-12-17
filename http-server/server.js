var http = require("http");

// Configuration parameters
var HOST = "localhost";
var PORT = "3002";

var server = http.createServer(function(request, response) {
  console.log("request starting...");
  // respond
  response.write("hello client!");
  response.end();
});

server.on("connection", socket => {
  var remoteAddress = socket.remoteAddress + ":" + socket.remotePort;
  console.log("new client connected: %s", remoteAddress);
});

server.listen(PORT, HOST, function() {
  console.log(`server listening on ${HOST}:${PORT}`);
});
