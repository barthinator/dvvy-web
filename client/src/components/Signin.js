import React, { Component } from 'react';
import '../styles/sign-in.css';
import Login from './login/LoginForm';
import logo from '../img/logo-white-dvvy.png';
//import Payments from './Payments';
import Logo from './animations/logo/animatedLogo';

import { Row, Col } from 'reactstrap';

document.body.style = 'background: #ff755e;'

class Signin extends Component {

  render() {
    return (
        <div>
        <div className="center">
          <div className="centerCol">
            <img className="logo" alt="dvvy logo" src={logo} />
            <h1>
              sign in
            </h1>
            <Login />
          </div>
          <div xs={{ size: 'auto', offset: 1 }}>
            <div className="logoContainer">

            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Signin;
