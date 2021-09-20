/*
  ATENÇÃO: por ser nomeadas as funções, elas podem fazer referência até mesmo à operações assíncronas.
*/
console.time('the-loop');

for (let i=0; i < 10000000; i++) {
  ;
}

console.timeEnd('the-loop');
