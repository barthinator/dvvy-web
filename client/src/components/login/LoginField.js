//SurveyField contains log9ic to render a single label and text input

import React from 'react';
import {Input, FormText} from 'reactstrap';

export default ({ input, label, name, meta: { error, touched } }) => {
  return(
    <div>
      <Input className="textInput" {...input} type={label === 'Password' ? 'password' : 'password'} placeholder={label === 'password' ? 'password' : 'username'}/>
      <FormText className="errorText" color='white' style={{marginBottom: '20px'}}>
        {touched && error}
      </FormText>
    </div>
  );
};
