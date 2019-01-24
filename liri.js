// 1. LIRI will search Spotify for songs, go to spotify and get music data
require("dotenv").config();

var keys = require("./keys");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
 
var spotify = new Spotify({
  id: <10a7c31b08d74c9dba97f1af69cd952e>,
  secret: <e25953116ef649a9952453c9be4d6aae>
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

// go to api's and get data, then console log it using command line arguments

// Bands in Town for concerts, get concert info

// OMDB for movies. get movie info





