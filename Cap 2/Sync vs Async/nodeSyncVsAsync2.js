const fs = require('fs');


// Callbacks aninhados
// o tratamento tem de ser diretamente na função!!!
fs.readFile('./apples.txt', 'utf8', function(err, data) {
  if (err) {
    console.error(err);
  } else {
    let adjData = data.replace(/apple/g, 'orange');

    fs.writeFile('./orange.txt', adjData, function(err) {
      if (err) {
        console.log(err);
      }
    });
  }
});
