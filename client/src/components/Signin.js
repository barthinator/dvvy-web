import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/sign-in.css';
import Login from './login/LoginForm';
import SignUp from './signup/SignUpNew';
import '../styles/index.css';
import logo from '../img/logo-white-dvvy.png';
//import Payments from './Payments';

document.body.style = 'background: #ff755e;'

class Signin extends Component {

  render() {
    return (
        <div class="container">
        <img className="logo" src={logo} />
            <h1>
              sign in
            </h1>
          <Login />
        </div>
    );
  }
}

function mapStateToProps({ auth }){
  return { auth };
}


export default connect(mapStateToProps)(Signin);
