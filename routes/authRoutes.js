const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/dashboard');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.post('/api/check_email', async (req, res) => {
    var email = req.body.email;
    const localEmail = await User.findOne({"local.email": email});
    const googleEmail = await User.findOne({"google.email": email});

    if(localEmail || googleEmail){
      res.send(true);
    } else{
      res.send(false);
    }
  });


  app.post('/api/signup', passport.authenticate('local-signup'),
  (req, res) => {
    if (req.authInfo.message){
      req.logout();
      res.statusMessage = req.authInfo.message;
      res.status(409).send(req.authInfo.message);
    }
    else{
      res.send("It worked");
    }
  });

  app.post('/api/login', passport.authenticate('local-login'),
  (req, res) => {
    if (req.authInfo.message){
      res.statusMessage = req.authInfo.message;
      res.status(401).send(req.authInfo.message);
    }
    else{
      res.send("It worked");
    }
  });

};
