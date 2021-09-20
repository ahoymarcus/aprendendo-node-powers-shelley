const cmd = require('child_process').spawn('cmd', ['/c', 'dir\n']);


/*
  Enviar como resultado o valor da pasta atual com o comando cd de terminal.
*/
cmd.stdout.on('data', function(data) {
  console.log('stdout: ' + data);
});

cmd.stderr.on('data', function(data) {
  console.log('stderr: ' + data);
});

cmd.on('exit', function(code) {
  console.log('Child process exite with cod ' + code);
});
