

let timer = setTimeout(function(name) {
  console.log('Hello ' + name);
}, 30000, 'Shelley');

// unref(), com apenas um evento em fila, cancela o envento e permite a aplicação encerrar
timer.unref();

console.log('Waiting on timer.....');
