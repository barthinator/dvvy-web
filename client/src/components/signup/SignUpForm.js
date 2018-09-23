//SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SignUpField from './SignUpField';
import validateEmails from '../../utils/validateEmails';
import validatePassword from '../../utils/validatePassword';
import formFields from './formFields';
import GoogleImg from '../../img/google_dark.png';
import axios from 'axios';



import { Button } from 'reactstrap';

class SignUpForm extends Component {

  renderFields(){
    return _.map(formFields, ({ name, label }) => {
      return <Field key={name}
        component={SignUpField}
        type='text'
        label={label}
        name={name}
      />
    });
  }

  render(){
    return(
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}
        >
          {this.renderFields()}
          <Link to='/'>
            <Button color="danger">Back</Button>
          </Link>
          <Button color="primary" type="submit">
            Submit
          </Button>
        </form>
        <a href="/auth/google"><img src={GoogleImg}></img></a>
      </div>
    );
  }
}

const asyncValidate = (values) => {
  return axios.post('/api/check_email', {email: values.email}).then((res) => {
    console.log(res.data);
    if (res.data){
      throw {email: "Email already taken"};
    }
  });
}

//Returns errors on the forms if there are any
function validate(values) {
  const errors = {};

  //Uses the custom validation function
  errors.email = validateEmails(values.email || '');
  errors.password = validatePassword(values.password || '');

  function validLength(word) {
    if (word.length > 20 && word.length > 1){
      return false;
    }
    return true;
  }

  if(!validLength(values.frname || '')){
    errors.frname = "First name is too long!";
  }

  if(!validLength(values.lname || '')){
    errors.lname = "Last name is too long!";
  }

  //Similar to map, iterates over each field name property
  _.each(formFields, ({ name }) => {
    if(!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

//form behaviors
export default reduxForm({
  validate,
  form: 'signUpForm',
  destroyOnUnmount: false,
  asyncValidate,
  asyncBlurFields: ['email']
})(SignUpForm);
