const express = require('express');
const router = express.Router();
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const fetch = require('node-fetch');
global.fetch = fetch;


// bring in the User model
const auth = require('../../middleware/auth');
const characters = require('../../data/characters');
const ages = require('../../data/ages');
const features = require('../../data/features');
const dilemmas = require('../../data/dilemmas');

// @route  GET api/auth
// @desc   Test Route
// @access public
router.get('/text', auth, async (req, res) => {
  try {
    const prompt = {
      character: characters[Math.floor(Math.random() * characters.length)],
      age: ages[Math.floor(Math.random() * ages.length)],
      feature: features[Math.floor(Math.random() * features.length)],
      dilemma: dilemmas[Math.floor(Math.random() * dilemmas.length)],
    };
    res.json(prompt);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
// @route  GET api/auth
// @desc   Test Route
// @access public
router.get('/images', auth, async (req, res) => {
  try {
    const unsplash = new Unsplash({
      accessKey: process.env.UNSPLASH_ACCESS_KEY
    });

    unsplash.photos.getRandomPhoto({
        count: 10,
        orientation: "portrait"
      }).then(toJson)
      .then(json => {
        res.json(json.map(photo => photo.urls.small));
      });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
