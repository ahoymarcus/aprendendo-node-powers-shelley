'use strict';



let buf = new Buffer('This is my pretty exemple');
let json = JSON.stringify(buf);

//console.log(json);

let buf2 = new Buffer(JSON.parse(json).data);

// console.log(buf2);

console.log(buf2.toString());


