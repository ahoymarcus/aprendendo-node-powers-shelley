const http = require('http');
const url = require('url');
const fs = require('fs');
const mime = require('mime');
const path = require('path');

const base = __dirname;


http.createServer(function(req, res) {
  pathname = path.normalize(base + req.url);
  console.log(pathname);

  fs.stat(pathname, function(err, stats) {
    if (err) {
      console.log(err);
      res.writeHead(404);
      res.write('Resource missing 404\n');
      res.end();
    } else if (stats.isFile()) {
      // tipo de conteúdo
      let type = mime.getType(pathname);
      console.log(type);

      res.setHeader('Content-Type', type);

      // criar fluxo de leitura com redirecionamento
      let file = fs.createReadStream(pathname);

      file.on('open', function() {
        res.statusCode = 200;
        file.pipe(res);
      });

      file.on('error', function(err) {
        console.log(err);
        res.writeHead(403);
        res.write('File permission problem');
        res.end();
      });
    } else {
      res.writeHead(403);
      res.write('Directory access is forbidden.');
      res.end();
    }
  });
}).listen(8124);


console.log('Web server running at 8124');
