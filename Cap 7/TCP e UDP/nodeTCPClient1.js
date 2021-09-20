const net = require('net');



let client = new net.Socket();
client.setEncoding('utf8');

// Conectar ao servidor
client.connect('8124', 'localhost', function() {
  console.log('Connected to server');
  client.write('Who needs a browser to communicate?');
});

// ao receber dados, reenviá-los ao servidor
process.stdin.on('data', function(data) {
  client.write(data);
});

// ao receber os dados devolvidos, envi[a-los ao console
client.on('data', function(data) {
  console.log(data);
});

// quando o servidor fechar a conexão
client.on('close', function() {
  console.log('Connectionn is closed....');
});
