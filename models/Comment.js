const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  artworkId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artwork',
    required: true
  },
  // Add other comment fields as needed
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;


// // Utilize reasonable data modeling practices (page 1, 10%

class Comment {
  constructor(id, text, author, artworkId) {
    this.id = id;
    this.text = text;
    this.author = author;
    this.artworkId = artworkId;
  }
}

module.exports = Comment;
