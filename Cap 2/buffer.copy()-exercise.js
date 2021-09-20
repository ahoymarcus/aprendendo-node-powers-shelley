var buf1 = new Buffer('This is a new buffer with a string');


var buf2 = new Buffer(10);
buf1.copy(buf2);


console.log('\n\n###Veja a saída do buffer abaixo');
console.log(buf2.toString());



