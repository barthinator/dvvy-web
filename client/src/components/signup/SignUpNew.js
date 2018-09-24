//Show a new survey
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SignUpForm from './SignUpForm';
import SignUpFormReview from './SignUpFormReview';


class SignUpNew extends Component {

  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview){
      return <SignUpFormReview
        toggleModal={() => this.props.toggleModal()}
        onCancel={() => this.setState({ showFormReview: false })}
      />;
    }

    return <SignUpForm onFormSubmit={() => this.setState({showFormReview:true})}/>;
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
})(SignUpNew);
