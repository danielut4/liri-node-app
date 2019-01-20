// 1. LIRI will search Spotify for songs, go to spotify and get music data

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});
 
function getMusicData() {
spotify.search({ type: 'track', query: 'process.argv[3?]' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
}
// go to api's and get data, then console log it using command line arguments

// Bands in Town for concerts, get concert info

// OMDB for movies. get movie info


js
require("dotenv").config();

var spotify = new Spotify(keys.spotify);
