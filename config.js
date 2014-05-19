
var Twit = require('twit');
 
if(!process.env.consumerKey){
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

module.export
