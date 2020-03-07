const os = require('os');
const http = require('http');

const server = http.createServer(function (req, res) {
  if (req.url === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'});
    res.end();
    console.log('favicon requested');
    return;
  }

  res.writeHead(200, {'Content-Type': 'application/json'});
  console.log('I have been hit'); //console logging everytime it's hit with.
  res.end(JSON.stringify({
    message: req.connection.remoteAddress,
    net:os.networkInterfaces()
  }));
});

server.listen(3000);

console.log("Server running at http://127.0.0.1:3000");