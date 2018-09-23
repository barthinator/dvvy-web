import axios from 'axios';

const re = 	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default (email) => {
  //splits by comma, removes spaces and then test for the regex and returns the bad ones
  const isValid = re.test(email);

  if (!isValid){
    return `Please enter a valid email`;
  }
  return;
};
