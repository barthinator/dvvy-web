const re = 	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default (emails) => {
  //splits by comma, removes spaces and then test for the regex and returns the bad ones
  const invalidEmails = emails
  .split(',')
  .map(email => email.trim())
  .filter(email => re.test(email) === false);

  if (invalidEmails.length){
    return `These emails are invalid ${invalidEmails}`;
  }

  return;
};
