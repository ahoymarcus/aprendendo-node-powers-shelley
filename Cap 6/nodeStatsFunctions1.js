const fs = require('fs');
const util = require('util');


fs.stat('./images/phoenix5a.png', function(err, stats) {
  if (err) {
    return console.log(err);
  }

  console.log(util.inspect(stats));
});
