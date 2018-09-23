//Show users there form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions/index';

import { Button } from 'reactstrap';

//ES6 destructure for taking onCancel and formValues from props
const SignUpFormReview = ({ onCancel, formValues, submitForm, history }) => {

  const reviewFields = _.map(formFields, ({ name, label }) => {
    if(label === 'Password') return;
    return (
      <div key={name}>
        <h4>{label}</h4>
        <p>
          {formValues[name]}
        </p>
      </div>
    );
  });

  return(
    <div>
      <h5>Please confirm your information</h5>
      {reviewFields}
      <Button
        onClick={onCancel}
        color="danger"
      >
        Back
      </Button>
      <Button color="success" onClick={() => submitForm(formValues, history)}>
        Create Account
      </Button>
    </div>
  );
};

function mapStateToProps(state){
  return { formValues: state.form.signUpForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SignUpFormReview));
