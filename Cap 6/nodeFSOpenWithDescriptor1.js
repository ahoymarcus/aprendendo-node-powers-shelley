'use strict';

const fs = require('fs');



// usando objeto descritor
fs.open('./new.txt', 'a+', 0x666, function(err, fd) {
  if (err) {
    return console.error(err);
  }

  fs.write(fd, 'First line', 'utf8', function(err, written, str) {
    if (err) {
      return console.error(err);
    }

    let buf = new Buffer(written);
    fs.read(fd, buf, 0, written, 0, function(err, bytes, buffer) {
      if (err) {
        console.error(err);
      }

      console.log(buf.toString('utf8'));
    });
  });
});
