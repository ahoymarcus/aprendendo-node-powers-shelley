

let interval = setInterval(function(name) {
  console.log('Hello ' + name);
}, 3000, 'Shelley');

let timer = setTimeout(function(interval) {
  clearInterval(interval);
  console.log('Cleared timer.....');
}, 30000, interval);

// unref(), com mais de um evento em fila, resulta em deixar a sua resolução
timer.unref();

console.log('Waiting on first interval.....');
