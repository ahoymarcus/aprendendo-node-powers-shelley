const fs = require('fs');



let readable = fs.createReadStream('./working.txt').setEncoding('utf8');

let data = '';

readable.on('data', function(chunk) {
  data += chunk;
});

readable.on('end', function() {
  console.log(data);
});
