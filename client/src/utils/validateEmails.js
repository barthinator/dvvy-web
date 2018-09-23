const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (email) => {
  //splits by comma, removes spaces and then test for the regex and returns the bad ones
  const isValid = re.test(email.trim().toLowerCase());

  if (!isValid){
    return `Please enter a valid email`;
  }
  return;
};
