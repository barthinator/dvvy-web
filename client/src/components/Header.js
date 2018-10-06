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

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isOpen: false,
      modal: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleModal(feature){
    this.setState({
      modal: !this.state.modal,
      feature
    });
  }

  renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return (
          //<NavItem><NavLink href="/auth/google">Sign Up</NavLink></NavItem>
          <NavItem><NavLink onClick={() => this.toggleModal("signup")}><Octicon mega name="person"/></NavLink></NavItem>
        );
      default:
        return [
          // <li key="1"><Payments /></li>,
          // <li key="2" style={{ margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
          <NavItem key="3"><NavLink href="/api/logout"><Octicon mega name="person"/>Logout</NavLink></NavItem>
        ];
    }
  }

  renderBody() {
    switch(this.state.feature){
      case "signup":
        return <SignUp toggleModal={() => {this.setState({modal: !this.state.modal})}}/>
      case "login":
        return <Login toggleModal={() => {this.setState({modal: !this.state.modal})}}/>
      default:
        return <SignUp toggleModal={() => {this.setState({modal: !this.state.modal})}}/>
    }
  }

  renderFooter() {
    switch(this.state.feature){
      case "signup":
        return <p>Already have an account <a onClick={() => this.setState({feature: "login"})}>log in</a></p>
      case "login":
        return <p>Dont have an account, <a onClick={() => this.setState({feature: "signup"})}>sign up</a></p>
    }
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
              {this.renderContent()}
            </Nav>
          </Collapse>
        </Navbar>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
          <ModalHeader toggle={this.toggleModal}>Sign Up</ModalHeader>
          <ModalBody>
            {this.renderBody()}
          </ModalBody>
          <ModalFooter>
            {this.renderFooter()}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps)(Header);
