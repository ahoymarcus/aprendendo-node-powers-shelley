'use strict';

let buf1 = Buffer.from('this is the way we build our buffer');
let lnth = buf1.length;

// criar novo Buffer
let buf2 = buf1.slice(19, lnth);
console.log(buf2.toString());

// modificar o 2º Buffer
buf2.fill('*', 0, 5);
console.log(buf2.toString());

// mostrar o impacto da modificação de buf2 no buf1
console.log(buf1.toString());

// testar equivalêencia entre buffers
if (buf1.equals(buf2)) {
    console.log('\n buffers 1 e 2 are equal');
} else {
  console.log('\nBuffers 1 e 2 are not equal');
}


// copiar Buffers
let buf3 = Buffer.from('this is a new buffer with a string');

let buf4 = Buffer.alloc(10);
buf3.copy(buf4)

console.log('buffer3: ' + buf3.toString());
console.log('buffer4 (truncado do buf3): ' + buf4.toString());

if (buf3.equals(buf4)) {
  console.log('\n buffers 3 e 4 are equal');
} else {
  console.log('\nBuffers 3 e 4 are not equal');
}

// comparar buffers
console.log("Comparando buffers: \n -1 = anterior \n 1 = posterior \n 0 = equivalente \n")

let buf5 = Buffer.from('1 is number one');
let buf6 = Buffer.from('2 is number two');

let buf7 = Buffer.alloc(buf5.length);
buf5.copy(buf7);

console.log("buf5 em relação ao buf6: " + buf5.compare(buf6));
console.log("buf6 em relação ao buf5: " + buf6.compare(buf5));
console.log("buf5 em relação ao buf7: " + buf5.compare(buf7));
