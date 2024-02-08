// Import required modules
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Artwork = require('../models/Artwork');
const Comment = require('../models/Comment');

// DELETE route to remove an existing user
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.json(deletedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE route to remove an existing artwork
router.delete('/artworks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedArtwork = await Artwork.findByIdAndDelete(id);
    res.json(deletedArtwork);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE route to remove an existing comment
router.delete('/comments/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedComment = await Comment.findByIdAndDelete(id);
    res.json(deletedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
