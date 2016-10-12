var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.get('/vinyls', function (req, res) {
  res.sendFile(__dirname + '/public/vinyls.json');
});

app.listen(8080, function () {
  console.log('Vinyl server running on 8080');
});