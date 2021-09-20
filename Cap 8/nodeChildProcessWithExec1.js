const exec = require('child_process').exec;


/*
  Enviar como resultado o valor da pasta atual com o comando cd de terminal.
*/
pwd = exec('cd');

pwd.stdout.on('data', function(data) {
  console.log('stdout: ' + data);
});

pwd.stderr.on('data', function(data) {
  console.log('stderr: ' + data);
});

pwd.on('close', function(code) {
  console.log('Child process exited with code ' + code);
});
