module.exports = (req, res, next) => {
  
  //If there is no user something is wrong
  if (!req.user){
    return res.status(401).send({ error: 'You must log in!' });
  }

  //Else continue to next middleware
  next();
};
