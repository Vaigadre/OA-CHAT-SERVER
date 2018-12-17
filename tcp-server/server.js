var net = require("net");

// Configuration parameters
var HOST = "localhost";
var PORT = "3001";

// Create Server instance
var server = net.createServer(onClientConnected);

server.listen(PORT, HOST, function() {
  console.log(`server listening on ${HOST}:${PORT}`);
});

function onClientConnected(sock) {
  var remoteAddress = sock.remoteAddress + ":" + sock.remotePort;
  console.log("new client connected: %s", remoteAddress);

  sock.on("data", function(data) {
    console.log(`${remoteAddress} Says: ${data}`);
    sock.write(data);
    sock.write(" exit");
  });
  sock.on("close", function() {
    console.log(`connection from ${remoteAddress} closed`);
  });
  sock.on("error", function(err) {
    console.log(`Connection ${remoteAddress} error: ${err.message}`);
  });
}
