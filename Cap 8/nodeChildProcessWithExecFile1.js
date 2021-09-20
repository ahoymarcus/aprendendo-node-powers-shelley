const execFile = require('child_process').execFile;


let child;

child = execFile('myChildProcess1.bat', function(error, stdout, stderr) {
  if (error !== null) {
    console.error(stderr);
  }

  console.log('stdout: ' + stdout);
});
