const util = require('util');



let val = 0.5;
let str = 'a string';

console.log('The value is %d and the string is %s', val, str);


/*
  %s - string
  %d - número
  %j - JSON
  %% - mostra o caractere de porcentagem
*/
let msg = util.format('\nThe value is %d and the string is %s', val, str);

console.log(msg);
