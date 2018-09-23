//SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { Link } from 'react-router-dom';
import LoginField from './LoginField';
import formFields from './formFields';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import GoogleImg from '../../img/google_dark.png';

import { Button } from 'reactstrap';

class LoginForm extends Component {

  renderFields(){
    return _.map(formFields, ({ name, label }) => {
      return <Field key={name}
        component={LoginField}
        type='text'
        label={label}
        name={name}
      />
    });
  }

  onSubmit(values){
    return this.props.login(values, this.props.history).then(() => {
      console.log(this.props.auth);
      if (!this.props.auth){
        throw new SubmissionError({ password: 'Wrong password or email!'});
      }
    });
  }

  render(){
    const { error, handleSubmit } = this.props;
    return(
      <div>
        <form
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          {this.renderFields()}
          {error}
          <Link to='/'>
            <Button color="danger">Back</Button>
          </Link>
          <Button type="submit" color="success">Login</Button>
        </form>
        <a href="/auth/google"><img src={GoogleImg} alt="google sign in"></img></a>
      </div>
    );
  }
}

//Returns errors on the forms if there are any
function validate(values) {
  const errors = {};

  //Similar to map, iterates over each field name property
  _.each(formFields, ({ name }) => {
    if(!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

function mapStateToProps({ auth }){
  return { auth };
}

//form behaviors
export default reduxForm({
  form: 'loginForm',
  destroyOnUnmount: false
})(
  connect(mapStateToProps, actions)(LoginForm)
);
