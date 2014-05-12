var mongoose = require('mongoose');

var TweetSchema = new mongoose.Schema({
  name: String,
  screen_name: String,
  id: Number,
  text: String,
  source: String,
  location: String,
  followers_count: String,
  friends_count: Number,
  statuses_count: Number,
  lang: String,
  profile_image_url: String,
  geo: [],
  coordinates: Number,
  place: [{
    city: String,
    country: String,
  }],
});

module.exports = mongoose.model('tweet', TweetSchema);