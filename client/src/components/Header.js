import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
//import Payments from './Payments';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return (
          //<NavItem><NavLink href="/auth/google">Sign Up</NavLink></NavItem>
          <NavItem><NavLink href="/signup">Sign Up</NavLink></NavItem>
        );
      default:
        return [
          // <li key="1"><Payments /></li>,
          // <li key="2" style={{ margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
          <NavItem key="3"><NavLink href="/api/logout">Logout</NavLink></NavItem>
        ];
    }
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href={this.props.auth ? '/dashboard' : '/'}>
            dvvy
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.renderContent()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps)(Header);
