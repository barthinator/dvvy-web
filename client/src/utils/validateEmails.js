const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

export default (email) => {
  //splits by comma, removes spaces and then test for the regex and returns the bad ones
  const isValid = re.test(email.trim().toLowerCase());

  if (!isValid){
    return `Please enter a valid email`;
  }
  return;
};
