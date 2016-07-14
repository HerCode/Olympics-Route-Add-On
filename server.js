var express = require('express');
var index = require('./routes/index');
var archery = require('./routes/archery');
var canoekayak = require('./routes/canoekayak');
var modpent = require('./routes/modpent');
var syncswim = require('./routes/syncswim');
var taekwondo = require('./routes/taekwondo');

var app = express();

//Configs
app.use(express.static('public'));

//Routers
app.use('/', index);
app.use('/archer', archery);
app.use('/boadie', canoekayak);
app.use('/pentathalist', modpent);
app.use('/syncist', syncswim);
app.use('/taekwandist', taekwondo);

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Server running on port', port);
});
