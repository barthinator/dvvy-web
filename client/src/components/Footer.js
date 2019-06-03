import React, { Component } from 'react';
import '../styles/footer.css';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink
  } from 'reactstrap';
import logo from '../img/logo-white.png';
//import Payments from './Payments';

export default class Footer extends Component {

  render() {
    return (
      <div style={{bottom: 0, position:'fixed', width:'100%', zIndex: 2}}>
        <Navbar color="light" light expand="md">
          <NavbarBrand href={this.props.auth ? '/dashboard' : '/'}>
            <img alt="dvvy logo" src={logo} />dvvy
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <Button color="secondary" onClick={this.props.onToggle}>Toggle</Button>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
