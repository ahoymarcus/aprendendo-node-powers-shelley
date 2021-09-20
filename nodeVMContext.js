const vm = require('vm');


/*
  Observe o resultado no console:

  Contexto 1:
  101
  1
  Contexto 2:
  101
  100

  count1 é global e aparece em ambos os contextos.
  count1 possui 2 contextos diferentes. Primeiro pertence ao script txt em VM e o segundo é o do próprio main local.
  FINALMENTE: foi passado um json com um campo 'filename' para marcar o contexto de VM.
*/
global.count1 = 100;
let count2 = 100;

let txt = 'if (count1 === undefined) var count1 = 0; count1++;' +
          'if (count2 === undefined) var count2 = 0; count2++;' +
          'console.log(count1); console.log(count2);';

let script = new vm.Script(txt);
script.runInThisContext({ filename: 'count.vm' });

console.log(count1);
console.log(count2);
