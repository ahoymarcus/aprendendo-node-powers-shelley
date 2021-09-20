let timer1 = setTimeout(function(name) {
  console.log('Hello ' + name);
}, 30000, 'Shelly');

// Este processo não será bloqueado, virá antes do timer de 30s
console.log("Waiting on timer.....");

setTimeout(function(timer) {
  clearTimeout(timer);
  console.log('cleared timer');
}, 3000, timer1);
