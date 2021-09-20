const fs = require('fs');
const zlib = require('zlib');



const gzip = zlib.createGzip();


let inp = fs.createReadStream('input.txt');
let out = fs.createWriteStream('input.txt.gz');

inp.pipe(gzip).pipe(out);
