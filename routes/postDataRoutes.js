// Import required modules
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Artwork = require('../models/Artwork');
const Comment = require('../models/Comment');

// POST route to create a new user
router.post('/users', async (req, res) => {
  const { username, email } = req.body;
  try {
    const newUser = new User({ username, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST route to create a new artwork
router.post('/artworks', async (req, res) => {
  const { title, artist, description } = req.body;
  try {
    const newArtwork = new Artwork({ title, artist, description });
    await newArtwork.save();
    res.status(201).json(newArtwork);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST route to create a new comment
router.post('/comments', async (req, res) => {
  const { text, author, artworkId } = req.body;
  try {
    const newComment = new Comment({ text, author, artworkId });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
