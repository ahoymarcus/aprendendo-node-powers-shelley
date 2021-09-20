

let interval = setInterval(function(name) {
  console.log('Hello ' + name);
}, 3000, 'Shelly');

setTimeout(function(interval) {
  clearInterval(interval);
  console.log('Cleared timer.....');
}, 30000, interval);

console.log('Wainting on first interval.......');
