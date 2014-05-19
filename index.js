var express = require('express');
var routes = require('./routes');
var config = require('./config');
var http = require('http');
var path = require('path');
var Twit = require('twit');
 
if(!process.env.consumerKey){
  var password = require('./password');
} 
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon(path.join(__dirname, 'public/images/bfavicon.ico')));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}      

  var consumerKey= process.env.consumerKey || password.consumerKey;
  var consumerSecret= process.env.consumerSecret || password.consumerSecret;
  var accessToken= process.env.accessToken || password.accessToken;
  var accessTokenSecret= process.env.accessTokenSecret || password.accessTokenSecret;

var T = new Twit({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  access_token: accessToken,
  access_token_secret: accessTokenSecret
});

app.get('/', routes.index);

// var T = new Twit({
//   consumer_key: password.consumerKey,
//   consumer_secret: password.consumerSecret,
//   access_token: password.accessToken,
//   access_token_secret: password.accessTokenSecret
// });

app.get('/refreshTweets', function(req, res) {
  var search = req.query.name;
  console.log(search);
  T.get('search/tweets', { q: search+' -RT lang:en', result_type:'recent', count: 100 }, function(err, reply) {
    console.log("tweetsz gotted");
    res.json(reply);
  });
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
