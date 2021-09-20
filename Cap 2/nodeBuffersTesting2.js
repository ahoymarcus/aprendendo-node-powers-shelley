'use strict';

/*
  Buffer e JSON

  ATENÇÃO: o construtor new Buffer() foi depreciado!!!
*/
//let buf = new Buffer('This is my pretty example');

let strBuffer = Buffer.from('This is my pretty example');

let jsonBuffer = JSON.stringify(strBuffer);
console.log(`jsonBuffer:\n ${jsonBuffer} \n jsonBuffer.length: ${jsonBuffer.length}\n`);


let json = JSON.parse(jsonBuffer).data;

console.log("String utf-8: " +   json.toString() + '\n');

console.log("String ascii: " + json.toString('ascii'));
