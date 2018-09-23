const passport = require('passport');

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

  app.post('/api/signup', passport.authenticate('local-signup'),
  (req, res) => {
    if (req.authInfo.message){
      req.logout();
      res.status(409).send(req.authInfo.message);
    }
    else{
      res.send("It worked");
    }
  });

  app.post('/api/login', passport.authenticate('local-login'),
  (req, res) => {
    if (req.authInfo.message){
      req.logout();
      res.status(401).send(req.authInfo.message);
    }
    else{
      res.send("It worked");
    }
  });

};
