const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const { encrypt } = require("./crypto");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken, refreshToken);
      var encryptedRefreshToken = encrypt(refreshToken);
      var encryptedAccessToken = encrypt(accessToken);
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // User already exists
          console.log(`User: ${profile.id} exists`);
          done(null, existingUser);
        } else {
          new User({
            email: profile.emails[0].value,
            displayName: profile.displayName,
            photoURL: profile.photos[0].value,
            googleId: profile.id,
            refreshToken: encryptedRefreshToken,
            accessToken: encryptedAccessToken,
          })
            .save()
            .then((data) => {
              console.log(`New User: ${profile.id} created`);
              done(null, data);
            });
        }
      });
    }
  )
);
