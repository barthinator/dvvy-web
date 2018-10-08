//SurveyField contains log9ic to render a single label and text input

import React from 'react';
import {Label, Input, FormText} from 'reactstrap';

export default ({ input, label, name, meta: { error, touched } }) => {
  return(
    <div>
      <Input className="textInput" {...input} type={label === 'Password' ? 'password' : 'text'} placeholder={label === 'password' ? 'password' : 'username'}/>
      <FormText color='danger' style={{marginBottom: '20px'}}>
        {touched && error}
      </FormText>
    </div>
  );
};
