// Import required modules
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Artwork = require('../models/Artwork');
const Comment = require('../models/Comment');

// PATCH route to update an existing user
router.patch('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, { username, email }, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT route to update an existing artwork
router.put('/artworks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, artist, description } = req.body;
  try {
    const updatedArtwork = await Artwork.findByIdAndUpdate(id, { title, artist, description }, { new: true });
    res.json(updatedArtwork);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PATCH route to update an existing comment
router.patch('/comments/:id', async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  try {
    const updatedComment = await Comment.findByIdAndUpdate(id, { text }, { new: true });
    res.json(updatedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
