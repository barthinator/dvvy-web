import React, { Component } from 'react';
import '../styles/sign-in.css';
import Login from './login/LoginForm';
import logo from '../img/logo-white-dvvy.png';
//import Payments from './Payments';

document.body.style = 'background: #ff755e;'

class Signin extends Component {

  render() {
    return (
        <div>
        <img className="logo" alt="dvvy logo" src={logo} />
            <h1>
              sign in
            </h1>
          <Login />
        </div>
    );
  }
}

export default Signin;
