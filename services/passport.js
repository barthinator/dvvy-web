const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ "google.id": profile.id });

    if (existingUser){
      //already have a record with the id
      return done(null, existingUser);
    }

    const user = await new User({ "google.id": profile.id }).save();
    done(null, user);
  })
);

passport.use('local-signup', new LocalStrategy({
  // by default, local strategy uses username and password, we will override with email
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true // allows us to pass back the entire request to the callback
},
async (req, email, password, done) => {

    // find a user whose email is the same as the forms email
    // we are checking to see if the user trying to login already exists
    const existingUser = await User.findOne({ 'local.email': email });

    if (existingUser){
      return done(null, existingUser, {message: "Email already exists"});
    }

    const user = new User();
    user.local.email = email;
    user.local.password = user.generateHash(password);

    const sentUser = await user.save();

    if(sentUser){
      return done(null, sentUser);
    }

}));

// =========================================================================
// LOCAL LOGIN =============================================================
// =========================================================================
// we are using named strategies since we have one for login and one for signup
// by default, if there was no name, it would just be called 'local'

passport.use('local-login', new LocalStrategy({
  // by default, local strategy uses username and password, we will override with email
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true // allows us to pass back the entire request to the callback
},
async (req, email, password, done) => { // callback with email and password from our form

  // find a user whose email is the same as the forms email
  // we are checking to see if the user trying to login already exists
  const user = await User.findOne({ 'local.email': email });

  if (!user)
    return done(null, false, {message: "No user found"});

  if(!user.validPassword(password))
    return done(null, false, {message: "Invalid password!"});

  // all is well, return successful user
  return done(null, user);

}));
