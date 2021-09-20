var buf1 = new Buffer('1 is number 1');
var buf2 = new Buffer('2 is number 2');

var  buf3 = new Buffer(buf1.length);
buf1.copy(buf3);


console.log('\n\n###Veja a saída do buffer abaixo');
console.log(buf1.compare(buf2));
console.log(buf2.compare(buf1));
console.log(buf1.compare(buf3));

// Saída
// -1
// 1
// 0

