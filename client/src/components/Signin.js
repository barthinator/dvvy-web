import React, { Component } from 'react';
import '../styles/sign-in.css';
import Login from './login/LoginForm';
import logo from '../img/logo-white-dvvy.png';
//import Payments from './Payments';
import Logo from './animations/logo/animatedLogo';

import { Row, Col, Container } from 'reactstrap';

document.body.style = 'background: #ff755e;'

class Signin extends Component {

  render() {
    return (
      <Container>
        <Row style={{ justifyContent: 'center', position: 'flex'}}>
              <img className="logo" alt="dvvy logo" src={logo} />
        </Row>
        <Row style={{ justifyContent: "center" }}>
            <h1>
              sign in
            </h1>
        </Row>
        <Row style={{ justifyContent: "center" }}>
            <Login />
        </Row>
        </Container>
    );
  }
}

export default Signin;
