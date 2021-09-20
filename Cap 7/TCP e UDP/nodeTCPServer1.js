const net = require('net');



const PORT = 8124;

let server = net.createServer(function(conn) {
  console.log('Connected....');

  conn.on('data', function(data) {
    console.log(data + ' from ' + conn.remoteAddress + ' ' + conn.remotePort);

    conn.write('Repeating: ' + data);
  });

  conn.on('close', function() {
    console.log('Client closed connection....');
  });
}).listen(PORT);

server.on('listening', function() {
  console.log('Listening on ' + PORT);
});

server.on('error', function(err) {
  if (err.code = "EADDRINUSE") {
    console.warn('Address in use, retrying...');

    setTimeout(() => {
      server.close();
      server.listen(PORT);
    }, 1000);
  } else {
    console.error(err);
  }
});
