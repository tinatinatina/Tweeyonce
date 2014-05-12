var express = require('express');
var app = express();
var Twit = require('twit');
 
if(!process.env.URI){
  var password = require('./password');
}       

var T = new Twit({
  consumer_key: password.consumerKey,
  consumer_secret: password.consumerSecret,
  access_token: password.accessToken,
  access_token_secret: password.accessTokenSecret
});

// app.post('*', function(req, res) {
//   T.get('search/tweets', { q: 'beyonce', count: 100 }, function(err, reply) {
//     console.log(reply);
//     res.json(reply);
//   });
// });
