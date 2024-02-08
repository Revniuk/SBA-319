const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },

}, { timestamps: true });

const Artwork = mongoose.model('Artwork', artworkSchema);

module.exports = Artwork;

// ize reasonable data modeling practices (page 1, 10%)

class Artwork {
  constructor(id, title, artist, description) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.description = description;
  }
}

module.exports = Artwork;

