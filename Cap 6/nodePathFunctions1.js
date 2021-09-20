'use strict';

const fs = require('fs');
const path = require('path');



fs.readdir('./', function(err, files) {
  for (let file of files) {
    let extension = path.extname(file);

    /*
      O 2º param, extension, faz com que apenas o nome base seja devolvido para a variável
    */
    let baseName = path.basename(file, extension);

    console.log('file: ' + baseName + ' with extension of ' + extension);
  }
});
