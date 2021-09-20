'use strict';

const util = require('util');
const eventEmitter = require('events').EventEmitter;
const fs = require('fs');



function InputChecker (name, file) {
  this.name = name;
  this.writeStream = fs.createWriteStream('./' + file + '.txt',
  {
      'flags': 'a',
      'encoding': 'utf8',
      'mode': 0o666
  });
};

util.inherits(InputChecker, eventEmitter);

InputChecker.prototype.check = function check(input) {
  // eliminar espaços em branco
  let command = input.trim().substr(0,3);

  // processar possíveis comandos
  // wr: grava em arquivo
  if (command == 'wr:') {

    this.emit('write', input.substr(3, input.length));
  } else if (command == 'en:') { // encerrar processo
    this.emit('end');
  } else {
    this.emit('echo', input);
  }
};

// testa o novo obj e o tratamento dos eventos
let ic = new InputChecker('Shelley', 'output');

ic.on('write', function(data) {
  this.writeStream.write(data, 'utf8');
});

ic.on('echo', function(data) {
  process.stdout.write(ic.name + ' wrote ' + data);
});

ic.on('end', function() {
  process.exit();
});

// capturar a entrada depois de definir a codificação de texto
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
  let input = process.stdin.read();

  if (input !== null) {
    ic.check(input);
  }
});
