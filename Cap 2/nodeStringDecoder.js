'use strict';

const StringDecoder = require('string_decoder').StringDecoder;


let decoder = new StringDecoder('utf8');

let euro = Buffer.from([0xE2, 0x82]);
let euro2 = Buffer.from([0xAC]);

console.log(decoder.write(euro));
console.log(decoder.write(euro2));

console.log(euro.toString());
console.log(euro2.toString());
