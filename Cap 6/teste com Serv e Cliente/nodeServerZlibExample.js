const http = require('http');
const zlib = require('zlib');
const fs = require('fs');



const server = http.createServer().listen(8124);

server.on('request', function(req, res) {
  if (req.method == 'POST') {
    let chunks = [];

    req.on('data', function(chunk) {
      chunks.push(chunk);
    });

    req.on('end', function() {
      let buf = Buffer.concat(chunks);

      zlib.unzip(buf, function(err, result) {
        if (err) {
          res.writeHead(500);
          res.end();

          return console.log('error ' + err);
        }

        let timestamp = Date.now();
        let filename = './images/done' + timestamp + '.png';

        fs.createWriteStream(filename).write(result);
      });

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Received and undecompressed file\n');
    });
  }
});


console.log('Server listening on 8124');
