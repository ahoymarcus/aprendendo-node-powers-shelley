const http = require('http');


const server = http.createServer();

server.on('request', function(req, res) {
	console.log('Request event.....');

	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Helloes Worlds!!!');
});

server.on('connection', function() {
	console.log('Connection event......');
});

server.listen(8124, function() {
	console.log('Listening event.....');
});

console.log('Server running at port 8124');
