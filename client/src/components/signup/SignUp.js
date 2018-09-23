import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SignUpForm from './SignUpForm';
import GoogleImg from '../../img/google_dark.png';

class SignUp extends Component {

  renderContent() {
    return (
    <div>
      <SignUpForm onFormSubmit={() => this.setState({showFormReview:true})}/>
      <a href="/auth/google"><img src={GoogleImg}></img></a>
    </div>);
  }

  render(){
    return(
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'signUpForm'
})(SignUp);
