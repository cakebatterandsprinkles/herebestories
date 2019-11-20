const express = require("express");
const router = express.Router();
// this is a protected route, so we bring in the auth middleware.
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
//for the post routes, we want to validate the requests
const {
  validationResult
} = require("express-validator");

// @route  GET api/profile/me
// @desc   Get current user's profile
// @access private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile
      .findOne({
        user: req.user.id
      })
      .populate("user", ["username"]);
    //if there is no profile, return an error message
    if (!profile) {
      return res.status(400).json({
        msg: "There is no profile for this user"
      });
    }
    res.json(profile);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  POST api/profile
// @desc   Create or update a user profile
// @access private

// we need to use both of the auth and validation middleware at this route
// so we bring them in the second parameter in an array
router.post('/', auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    const {
      website,
      country,
      age,
      interests,
      favoriteBooks,
      moreInformation
    } = req.body;

    //Build a profile object
    const profileFields = {
      user: req.user.id,
      website,
      country,
      age,
      interests,
      favoriteBooks,
      moreInformation

    };

    try {
      let profile = await Profile.findOne({
        user: req.user.id
      });

      if (profile) {
        //update
        profile = await Profile.findOneAndUpdate({
          user: req.user.id
        }, {
          $set: profileFields
        }, {
          new: true
        });
        return res.json(profile);
      }
      //create
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  GET api/profile/user/:user_id
// @desc   Get profile by user ID
// @access public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate("user", ["username"]);
    if (!profile) {
      return res.status(400).json({
        msg: "Profile not found"
      });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({
        msg: "Profile not found"
      });
    }
    res.status(500).send("Server error");
  }
});


module.exports = router;
