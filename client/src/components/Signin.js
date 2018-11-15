import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/sign-in.css';
import Login from './login/LoginForm';
import SignUp from './signup/SignUpNew';
import '../styles/index.css';
import {Container, Row, Col} from 'reactstrap'
import logo from '../img/logo-white-dvvy.png';
//import Payments from './Payments';

document.body.style = 'background: #ff755e;'

class Signin extends Component {

  render() {
    return (
        <Container fluid>
          <Row noGutter>
            <Col xl="5" lg="5" md="5" sm="5" xs="3">
            </Col>
            <Col xl="2" lg="4" md="3" sm="3" xs="6">
              <img className="logo" src={logo} />
            </Col>
            <Col xl="auto" lg="auto" md="auto" sm="auto" xs="auto">
            </Col>
          </Row>
          <Row noGutter>
            <Col xl="5" lg="5" md="4" sm="4" xs="3">
            </Col>
            <Col xl="2" lg="4" md="5" sm="5" xs="6">
            <h1>
              sign in
            </h1>
            </Col>
            <Col xl="auto" lg="auto" md="auto" sm="auto" xs="auto">
            </Col>
          </Row>
          <Row noGutter>
            <Col xl="4" lg="3" md="3" sm="4" xs="3">
            </Col>
            <Col xl="4" lg="6" md="6" sm="5" xs="6">
              <div class="content">
                <Login />
              </div>
            </Col>
            <Col xl="auto" lg="auto" md="auto" sm="auto" xs="auto">
            </Col>
          </Row>
        </Container>
    );
  }
}

function mapStateToProps({ auth }){
  return { auth };
}


export default connect(mapStateToProps)(Signin);
