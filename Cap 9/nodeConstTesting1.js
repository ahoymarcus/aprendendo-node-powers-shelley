const test = ['one', 'two', 'three'];
const test2 = { apples: 1 , peaches: 2 };

console.log(test);
console.log(test2 + '\n\n');


//test = test2; // erro
console.log('Atenção: a constante só é imutável em termos de variáveis primitivas, de modo que no caso de arrays e objetos, observamos aqui que as suas partes podem ser modificadas.\n');
console.log('Segundo a professora Shelley Powers, caso seja necessário alcançar um maior rigor de imutabilidade, seria preciso utilizar obhect.freeze().\n');


test[0] = test2.peaches;

test2.apples = test[2];


console.log(test);
console.log(test2);
