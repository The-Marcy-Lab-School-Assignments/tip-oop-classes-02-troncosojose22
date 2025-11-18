/**
 * Song Class
 * 
 * A class to manage songs with title, artist, play count, and rating.
 */

class Song {
  //write your code here
  static playlist = [];

  #playCount = 0;
  #rating = 0;

  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    
    Song.playlist.push(this);
  }
  get playCount() {
    return this.#playCount;
  }

  get rating() {
    return this.#rating;
  }

  play() {
    this.#playCount += 1;
    console.log(`Now playing: ${this.title} by ${this.artist}`)
  }

  rate(stars) {
    this.#rating = stars;
    console.log(`You rated ${this.title} ${stars} stars`)
  }

  isPopular() {
    return this.#playCount >= 10;
  }

  static getTotalSongs() {
    return Song.playlist.length;
  }

  static findByTitle(title) {
    return Song.playlist[Song.playlist.findIndex((song) => song.title == title)]
  }
}

// Export the Song class for testing
module.exports = { Song };
