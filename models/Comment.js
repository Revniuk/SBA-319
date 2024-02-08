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

// Include sensible indexes for any and all fields that are queried frequently. PAGE 1, 5%
// Comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  artworkId: { type: mongoose.Schema.Types.ObjectId, ref: 'Artwork', required: true }
});

// Add compound index for author and artworkId for frequent lookups based on these fields
commentSchema.index({ author: 1, artworkId: 1 });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
