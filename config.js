var express = require('express');
var app = express();
var Twit = require('twit');
 
if(!process.env.URI){
  var password = require('./password');
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

// app.post('*', function(req, res) {
//   T.get('search/tweets', { q: 'beyonce', count: 100 }, function(err, reply) {
//     console.log(reply);
//     res.json(reply);
//   });
// });
