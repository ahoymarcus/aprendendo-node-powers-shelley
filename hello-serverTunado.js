const http = require('http');
const fs = require('fs');



http.createServer(function(req, res) {
	let name = require('url').parse(req.url, true).query.name;

	if (name === undefined) name = 'World!!!';
	if (name == 'burningbird') {

		let file = 'images/phoenix5a.png';

		// fs.stat testa a existência do arquivo e se for o caso cria um obj com info dele
		fs.stat(file, function(err, stat) {
			if (err) {

				console.error(err);
				res.writeHead(200, { 'Content-Type': 'text-plain' });
				res.end("Sorry, Burningbird isn't around right now\n");
			} else {

				let img = fs.readFileSync(file);
				res.contentType = 'image/png';
				res.contentLength = stat.size;
				res.end(img, 'binary');
			}
		});
	} else {

		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.end('Hello ' + name + '\n');
	}
}).listen(8124);


console.log('Server running at http://localhost:8124/');
