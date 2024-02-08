// Import required modules
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Artwork = require('../models/Artwork');
const Comment = require('../models/Comment');

// GET route to retrieve all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET route to retrieve all artworks
router.get('/artworks', async (req, res) => {
  try {
    const artworks = await Artwork.find();
    res.json(artworks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET route to retrieve all comments
router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
