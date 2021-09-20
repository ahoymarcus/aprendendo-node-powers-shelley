'use strict';

let buf = Buffer.alloc(4);

// Escrever valores no Buffer
buf.writeUInt8(0x63, 0);
buf.writeUInt8(0x61, 1);
buf.writeUInt8(0x74, 2);
buf.writeUInt8(0x73, 3);

console.log(buf.readUInt8(0));
console.log(buf.readUInt8(1));
console.log(buf.readUInt8(2));
console.log(buf.readUInt8(3));

console.log('\n' + buf.toString());
