var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000
//here we bring in out data handler
var handleData = require('./server_functions/functions.js');

app.use('/', express.static('public'));
app.use('/chain', function(req, res, next) {
  req.newData = handleData(req.query);
  next();
})

app.get('/chain', function(req, res) {


  //we pass the data we received from the request to the handleData function
  //console.log(newData);
  //send the proper response with our handled Data
  res.send({display: req.newData});
})


app.listen(PORT, function() {
  console.log('server is started on port ' + PORT);
});
