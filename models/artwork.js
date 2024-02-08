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
