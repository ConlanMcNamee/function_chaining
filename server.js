var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000

app.get('/', function(req,res) {
  res.sendfile('./index.html');
})

app.get('/app.js', function(res, res) {
  res.sendfile('./app.js');
})

app.listen(PORT, function() {
  console.log('server is started on port ' + PORT);
});
