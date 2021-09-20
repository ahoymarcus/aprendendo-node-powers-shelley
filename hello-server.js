const http = require('http');



const server = http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World!!!');
}).listen(8124);

console.log('Server running at http://localhost:8124/');
