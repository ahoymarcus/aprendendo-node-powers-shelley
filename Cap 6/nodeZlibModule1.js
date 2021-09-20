const zlib = require('zlib');
const fs = require('fs');


let gzip = zlib.createGzip();

let inp = fs.createReadStream('./images/test.png');
let out = fs.createWriteStream('./images/test.png.gz');

inp.pipe(gzip).pipe(out);
