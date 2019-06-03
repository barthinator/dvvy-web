import React, { Component } from 'react';
import '../styles/sidebar.css';
import {
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';

export default class Sidebar extends Component {

  render() {
    const cssClasses = ['sidebar'];
    if (this.props.showSidebar) { cssClasses.push('render'); }

    return (
      <div class={cssClasses.join(' ')}>
        <Nav vertical>
          <NavItem>
            <NavLink href="/dashboard"><h1 style={{textAlign:"right"}}>HOME</h1></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/profile"><h1 style={{textAlign:"right"}}>ME</h1></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><h1 style={{textAlign:"right"}}>SUBMIT</h1></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><h1 style={{textAlign:"right"}}>MESSAGES</h1></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><h1 style={{textAlign:"right"}}>SETTINGS</h1></NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
