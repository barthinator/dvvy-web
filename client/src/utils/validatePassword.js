const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
const mediumRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
export default (password) => {

  if(strongRegex.test(password)) {

  } else if(mediumRegex.test(password)) {

  } else {
    return("Password does not match standards. Must be at least 8 characters and contain 1 uppercase, 1 lowercase, 1 numeric, 1 special character");
  }

  return;
};
