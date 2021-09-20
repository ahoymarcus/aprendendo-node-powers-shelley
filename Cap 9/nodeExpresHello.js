const express = require('express');


const app = express();

app.get('/', function(req, res) {
  res.send('Hello Express World!!!');
});

app.listen(3000, function() {
  console.log('Express app running on port 3000...');
});
