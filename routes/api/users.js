const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User Model
const User = require("../../models/User");

// @route     GET api/users/test
// @desc      Test user route
// @access    Public
router.get("/test", (req, res) => res.json({ msg: "User Route Works" }));

// @route     POST api/users/register
// @desc      Register User
// @access    Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ "local.email": req.body.email }).then((user) => {
    if (user) {
      errors.email = "Email Already Exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        method: "local",
        local: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        },
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.local.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.local.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route     POST api/users/login
// @desc      Logion User / Return JWT Token
// @access    Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //find the user by email
  User.findOne({ "local.email": email }).then((user) => {
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.local.password).then((isMatch) => {
      if (isMatch) {
        // User Matched

        const payload = {
          id: user.id,
          method: user.method,
          name: user.local.name,
          email: user.local.email,
          image: "https://www.gravatar.com/avatar/anything?s=200&d=mm",
        }; // Create JWT payload

        //Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        res.status(400).json(errors);
      }
    });
  });
});

// @route     POST api/users/oauth
// @desc      Logion User using oauth / Return JWT Token
// @access    Public
router.post("/oauth", async (req, res) => {
  let payId;

  const existingUser = await User.findOne({ "google.id": req.body.id });

  if (!existingUser) {
    console.log("Adding new user to the data base");

    // Adding new user to DB
    const newGoogleUser = new User({
      method: "google",
      google: {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        image: req.body.image,
      },
    });
    await newGoogleUser
      .save()
      .then((user) => (payId = user.id))
      .catch((err) => console.log(err));
  } else {
    console.log("User already exists in database");
    payId = existingUser.id;
  }

  // JWT payload
  const jwtPayload = {
    id: payId,
    method: "google",
    name: req.body.name,
    email: req.body.email,
    image: req.body.image,
  };
  //Sign Token
  jwt.sign(jwtPayload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
    res.json({
      success: true,
      token: "Bearer " + token,
    });
  });
});

// @route     GET api/users/current
// @desc      Return Current User
// @access    Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
