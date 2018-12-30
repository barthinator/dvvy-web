import React, { Component } from 'react';
import '../styles/header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink
  } from 'reactstrap';
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
            <img alt="dvvy logo" src={logo} />dvvy
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavLink href="/api/logout">Logout</NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
