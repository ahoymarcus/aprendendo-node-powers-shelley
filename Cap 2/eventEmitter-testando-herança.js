'use strict';


var util = require('util');
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');


function InputChecker(name, file) {
	this.name = name;
	this.writeStream = fs.createWriteStream('./' + file + '.txt', {
		'flags': 'a',
		'encoding': 'utf8',
		'mode': 0o666
	});
};


util.inherits(InputChecker, eventEmitter);

InputChecker.prototype.check = function check(input) {
	// eliminar excesso de espaços e branco
	let command = input.trim().substr(0, 3);
	
	// Processar os possíveis comandos
	// se for wr: grava os dados no arquivo
	if (command == 'wr:') {
		this.emit('write', input.substr(3, input.length));
	} else if (command == 'en:') { // se for en: encerra o processo
		this.emit('end');
	} else { // ecoar a entrada na saída-padrão caso não haja comandos
		this.emit('echo', input);
	}
};


// testar o novo objeto e o tratamento dos eventos
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


// Capturar a entrada depois de definir a codificação de texto
process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
	let input = process.stdin.read();
	
	if (input !== null) {
		ic.check(input);
	}
});











