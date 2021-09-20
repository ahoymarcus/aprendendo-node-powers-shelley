var eventEmitter = require('events').EventEmitter;


var em = new eventEmitter();

var counter = 0;


// Emitindo o evento
setInterval(function() { 
	em.emit('timedEvent', counter++); 
}, 3000);



// Criar o evento
em.on('timedEvent', function(data) {
	console.log('timedEvent -> ' + data);
});






