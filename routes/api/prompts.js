const express = require('express');
const router = express.Router();

// bring in the User model
const auth = require('../../middleware/auth');
const characters = require('../../data/characters');
const ages = require('../../data/ages');
const features = require('../../data/features');
const dilemmas = require('../../data/dilemmas');

// @route  GET api/auth
// @desc   Test Route
// @access public
router.get('/', auth, async (req, res) => {
  try {
    const prompt = {
      character: characters[Math.floor(Math.random() * characters.length)],
      age: ages[Math.floor(Math.random() * ages.length)],
      features: features[Math.floor(Math.random() * features.length)],
      dilemmas: dilemmas[Math.floor(Math.random() * dilemmas.length)],
    };
    res.json(prompt);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
