const spawn = require('child_process').spawn;


/*
  Usando o comando echo para enviar como resultado o valor da pasta atual com o comando cd de terminal. 
*/
const pwd = spawn('echo', ['%cd%'], { shell: true });

pwd.stdout.on('data', function(data) {
  console.log('stdout: ' + data);
});

pwd.stderr.on('data', function(data) {
  console.log('stderr: ' + data);
});

pwd.on('close', function(code) {
  console.log('Child process exited with code ' + code);
});
