const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");
const GooglePlusTokenStrategy = require("passport-google-plus-token");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, jwt_payload);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );

  //Google Oauth Strategy
  passport.use(
    "googleToken",
    new GooglePlusTokenStrategy(
      keys.googleAuthKey,
      async (accessToken, refreshToken, profile, done) => {
        console.log("hello");
        try {
          console.log("access token", accessToken);
          console.log("refresh token", refreshToken);
          console.log("profile", profile);

          // Check if User exists or not
          const existingUser = await User.findOne({ "google.id": profile.id });
          if (existingUser) {
            console.log("User Already exists in our DB");
            return done(null, existingUser);
          }
          console.log("User doesn't exists in our DB, creating a new one");
          // If new account
          const newUser = new User({
            method: "google",
            google: {
              id: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value,
              image: profile.photos[0].value,
            },
          });
          await newUser.save();
          done(null, newUser);
        } catch (err) {
          done(err, false, err.message);
        }
      }
    )
  );
};
