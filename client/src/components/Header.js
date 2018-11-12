import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button } from 'reactstrap';
import Octicon from 'react-octicon'
import SignUp from './signup/SignUpNew';
import Login from './login/LoginForm';
import logo from '../img/logo-white.png';
//import Payments from './Payments';

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div style={{bottom: 0, position:'fixed', width:'100%'}}>
        <Navbar color="light" light expand="md">
          <NavbarBrand href={this.props.auth ? '/dashboard' : '/'}>
            <img src={logo} />dvvy
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              test
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
