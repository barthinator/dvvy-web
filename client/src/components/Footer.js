import React, { Component } from 'react';
import '../styles/footer.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
  } from 'reactstrap';
import logo from '../img/logo-white.png';
//import Payments from './Payments';

export default class Footer extends Component {

  render() {
    const cssClasses = ['burger-button'];
    if (this.props.showSidebar) { cssClasses.push('open'); }

    return (
      <div style={{bottom: 0, position:'fixed', width:'100%', zIndex: 2}}>
        <Navbar color="light" light expand="md">
          <NavbarBrand href={this.props.auth ? '/dashboard' : '/'}>
            <img alt="dvvy logo" src={logo} />dvvy
          </NavbarBrand>
          <Nav className="ml-auto">
            <label class={cssClasses.join(' ')} onClick={this.props.onToggle} />
          </Nav>
        </Navbar>
      </div>
    );
  }
}
