const express = require('express');
const router = express.Router();
const Artwork = require('../models/Artwork');

// Route to get all artworks
router.get('/', async (req, res) => {
  try {
    const artworks = await Artwork.find();
    res.json(artworks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to create a new artwork
router.post('/', async (req, res) => {
  const artwork = new Artwork({
    title: req.body.title,
    artist: req.body.artist,
    // Add other artwork fields as needed
  });

  try {
    const newArtwork = await artwork.save();
    res.status(201).json(newArtwork);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to delete an artwork
router.delete('/:id', async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    if (!artwork) {
      return res.status(404).json({ message: 'Artwork not found' });
    }
    await artwork.remove();
    res.json({ message: 'Artwork deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
