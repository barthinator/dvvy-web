//SurveyField contains log9ic to render a single label and text input

import React from 'react';
import {Label, Input, FormText} from 'reactstrap';

export default ({ input, label, meta: { error, touched } }) => {
  return(
    <div>
      <Label>{label}</Label>
      <Input {...input} type={label === 'Password' ? 'password' : 'text' } />
      <FormText color='danger' style={{marginBottom: '20px'}}>
        {touched && error}
      </FormText>
    </div>
  );
};
