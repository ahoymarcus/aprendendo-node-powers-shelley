var buf1 = new Buffer('This is the way we build our buffer');
var lnth = buf1.length;


// criar novo buffer de fatia do antigo
var buf2 = buf1.slice(19, lnth);

console.log('\n\n###Veja a saída do buffer abaixo');
console.log(buf2.toString());


// modificar o segundo buffer
buf2.fill('*', 0, 5);

console.log(buf2.toString());


// mostrar como o buffer original copiado foi afetado pelas mudanças
console.log(buf1.toString());


// testar a equivalência dos dois buffers sendo operados
if (buf1.equals(buf2)) {
	console.log('Buffers ares equal!!!');
} else {
	console.log('Buffers ares NOT equal!!!');
}	
	
	



