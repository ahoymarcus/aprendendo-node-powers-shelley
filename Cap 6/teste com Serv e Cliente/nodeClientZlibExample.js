const http = require('http');
const fs = require('fs');
const zlib = require('zlib');



let gzip = zlib.createGzip();

let options = {
  hostname: 'localhost',
  port: 8124,
  method: 'POST',
  headers: {
    'Content-Type': 'application/javascript',
    'Content-Encoding': 'gzip,deflate'
  }
};

/*
  Note que a imagem será repassada por pipe() depois do Stream aberto
*/
let req = http.request(options, function(res) {
  res.setEncoding('utf8');
  let data = '';

  res.on('data', function(chunk) {
    data += chunk;
  });

  res.on('end', function() {
    console.log(data);
  });
});

req.on('error', function(err) {
  console.log('Problem with request: ' + err.message);
});

// Abrir ReadStream e depois repassar para o obj req
let readable = fs.createReadStream('./images/test.png');
readable.pipe(gzip).pipe(req);
