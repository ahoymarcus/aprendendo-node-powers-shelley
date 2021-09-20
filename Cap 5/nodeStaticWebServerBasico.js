const http = require('http');
const fs = require('fs');
const base = './public_html/index.html';



http.createServer(function(req, res) {
  pathname = base + req.url;
  console.log(pathname);

  fs.stat(pathname, function(err, stats) {
    if (err) {
      console.log(err);
      res.writeHead(404);
      res.write('Resource missing 404\n');
      res.end();
    } else {
      res.setHeader('Content-Type', 'text/html');

      // criar fluxo de leitura com redirecionamento
      let file = fs.createReadStream(pathname);

      file.on('open', function() {
        res.statusCode = 200;
        file.pipe(res);
      });

      file.on('error', function(err) {
        console.log(err);
        res.writeHead(403);
        res.write('File missing or permission problem');
        res.end();
      });
    }
  });
}).listen(8124);


console.log('Web server running at 8124');
