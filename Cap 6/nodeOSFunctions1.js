const os = require('os');



console.log('Using end of line' + os.EOL + 'to insert a new line');

console.log('####');
console.log('Esta máquina é big-endian ou little-endian: ' + os.endianness());

console.log('####');
console.log(os.tmpdir());
console.log(os.homedir());

console.log('####');
console.log(os.freemem());
console.log(os.loadavg());
console.log(os.totalmem());

console.log('####');
console.log(os.cpus());
