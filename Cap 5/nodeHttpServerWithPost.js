const http = require('http');
const querystring = require('querystring');



const server = http.createServer().listen(8124);

server.on('request', function(req, res) {
  if (req.method == 'POST') {
    let body = '';

    // adiciona data chunks ao final da página
    req.on('data', function(data) {
      body += data;
    });

    // transmitir os dados
    req.on('end', function() {
      let post = querystring.parse(body);

      console.log(post);
      res.writeHead(200, { 'Content-Type': 'text-plain' });
      res.end('Hello Worlds of servers!');
    });
  }
});

console.log('Server listening on 8124');
