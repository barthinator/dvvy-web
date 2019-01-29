//SurveyField contains log9ic to render a single label and text input

import React from 'react';
import {Input, FormText} from 'reactstrap';

export default ({ input, label, name, meta: { error, touched } }) => {
  return(
    <div>
    {/*Text field input type and placeholder (password type makes text hidden)*/}
      <Input className="textInput" {...input} type={label === 'email' ? 'username' : 'password'} placeholder={label === 'password' ? 'password' : 'username'}/>
      <FormText className="errorText" color='white' style={{marginBottom: '20px'}}>
        {touched && error}
      </FormText>
    </div>
  );
};
