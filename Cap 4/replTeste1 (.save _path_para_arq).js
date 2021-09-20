qs = require('querystring');
var test = function(x, y) {
var val = x * y;
return val;
};
test(3, 4);
const http = require('http');



const server = http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World!!!');
}).listen(8124);

console.log('Server running at http://localhost:8124/');
console.log(global);
http