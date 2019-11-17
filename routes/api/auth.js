const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// require express validator to check if the user is sending the data in the requested way
const {
  check,
  validationResult
} = require("express-validator");

// @route  POST api/auth
// @desc   Authenticate User & Get token
// @access public
router.post('/', [
  check('email', 'E-mail is required')
  .isEmail(),
  check('password', 'Password is required')
  .exists(),
], async (req, res) => {
  //check if there are errors, and return a proper response
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({
      errors: errors.array()
    });
  }

  const {
    email,
    password
  } = req.body;

  try {
    // See if the user exists
    let user = await User.findOne({
      email: email
    });
    if (!user) {
      return res
        .status(401)
        .json({
          errors: [{
            msg: "invalid credentials"
          }]
        });
    }

    // bcrypt has a method called compare which takes a plain text password
    // and compares it with the encrypted password, tells you if it's a match or not.
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({
          errors: [{
            msg: "invalid credentials"
          }]
        });
    }

    // Return jsonwebtoken
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWTSECRET, {
        expiresIn: 360000
      },
      (err, token) => {
        if (err) throw err;
        res.json({
          token
        });
      });

  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
