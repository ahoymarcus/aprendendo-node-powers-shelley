const http = require('http');


var server = http.createServer();

server.on('request', function(req, res) {
	console.log('request event...');
	
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World!');
});


server.on('connection', function() {
	console.log('connection event...');
});


server.listen(8124, function() {
	console.log('listening event...');
});


console.log('Server running at localhost:8124');



