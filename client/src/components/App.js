import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/app.css';
import * as actions from '../actions';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Signin from './Signin';
import Profile from './profile/Profile'

class App extends Component {

  constructor() {
    super();
    this.state = {
      isHidden: window.location.pathname == '/' ? true : false,
      showSidebar: false
    };
    console.log(this.state.isHidden);
  }


  componentDidMount() {
    this.props.fetchUser();
  }

  checkPath(){
    console.log("switcherd");
    if (window.location.pathname != '/'){
      this.setState({
        isHidden: false
      });
    }
    console.log(this.state.isHidden);
  }

  render() {
    return (
        <BrowserRouter>
          <div class='wrapper'>
            <div class='content'>
              <Route exact path="/" component={Signin} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profile" component={Profile} />
              <Footer isHidden={this.state.isHidden} showSidebar={this.state.showSidebar} />
            </div>
            <div class='sidebar'>
            </div>
          </div>
        </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App);
