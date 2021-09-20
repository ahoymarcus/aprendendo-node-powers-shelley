const dgram = require('dgram');



let client = dgram.createSocket("udp4");

process.stdin.on('data', function(data) {

  // repetir msg no console (precisa ser setada a codificação str)
  console.log(data.toString('utf8'));

  client.send(data, 0, data.length, 8124, "localhost", function(err, bytes) {
    if (err) {
      console.error('Error: ' + err);
    } else {
      console.log('Successful.....');
    }
  });
});
