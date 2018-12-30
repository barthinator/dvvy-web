//SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import LoginField from './LoginField';
import formFields from './formFields';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter, Redirect } from 'react-router-dom';
import GoogleImg from '../../img/google-signin-icon.png';
import SignUpNew from '../signup/SignUpNew';

import { Button } from 'reactstrap';


class LoginForm extends Component {

  state = {
    redirect: false,
    login: true,
    showFormReview: false
  }

  //Whenever the props are loaded in, checks to see if already logged in
  //from session and then redirects to dashboard if so
  componentDidUpdate(){
    if (this.props.auth){
      this.setState({
        redirect: true
      });
    }
  }

  //Renders the redux form data
  renderFields(){
    return _.map(formFields, ({ name, label, styles }) => {
      return <Field key={name}
        component={LoginField}
        type='text'
        label={label}
        name={name}
      />
    });
  }

  //ReduxForm handleSubmit calls this on submit, them makes login api call
  onSubmit(values){
    return this.props.login(values, this.props.history).then(() => {
      if (!this.props.auth){
        throw new SubmissionError({ password: 'Wrong password or email!'});
      }
    });
  }

  renderForm(){
    const { handleSubmit } = this.props;
    if (this.state.login){
      return (
        <form
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          {this.renderFields()}
          {error}
          <Button type="submit" color="transparent">LOG IN</Button>
        </form>
      );
    }
    else{
      return ( <SignUpNew /> );
    }
  }

  toggleSignUp(){
    console.log("test");
    this.setState({
      login: !this.state.login,
      showFormReview: false
    });
  }

  toggleLogin(){
    console.log("test");
    this.setState({
      login: !this.state.login,
      showFormReview: false
    });
  }

  renderSwitch(){
    if (this.state.login){
      return (
        <a onClick={() => this.toggleSignUp() }>Don't have an account, sign up!</a>
      );
    } else {
      return(
        <a onClick={() => this.toggleLogin() }>Don't have an account, sign in!</a>
      );
    }
  }

  render(){
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/dashboard'/>;
    }

    return(
      <div>
        {this.renderForm()}
        <a href="/auth/google"><img className="googleSignIn" src={GoogleImg} alt="google sign in"></img></a>
        {this.renderSwitch()}
      </div>
    );
  }
}

function mapStateToProps({ auth }){
  return { auth };
}

//form behaviors
export default reduxForm({
  form: 'loginForm'
})(
  connect(mapStateToProps, actions)(withRouter(LoginForm))
);
