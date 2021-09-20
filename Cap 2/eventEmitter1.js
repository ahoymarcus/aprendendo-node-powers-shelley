const eventEmitter = require('events').EventEmitter;



let counter = 0;

let em = new eventEmitter();

// emit() é o responsável pela emissão do evento
setInterval(function() {
  em.emit('timed', counter++);
}, 3000);


// o método on() trata um evento emitido
em.on('timed', function(data) {
  console.log('timed ' + data);
});
