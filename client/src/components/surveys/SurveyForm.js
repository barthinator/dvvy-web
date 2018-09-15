//SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {

  renderFields(){
    return _.map(formFields, ({ name, label }) => {
      return <Field key={name}
        component={SurveyField}
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
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderFields()}
          <Link to='/surveys' className="waves-effect waves-light btn-large red left">
            <i className="material-icons">delete</i>
          </Link>
          <button type="submit" className="waves-effect waves-light btn-large right">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

//Returns errors on the forms if there are any
function validate(values) {
  const errors = {};

  //Uses the custom validation function
  errors.recipients = validateEmails(values.recipients || '');

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
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
