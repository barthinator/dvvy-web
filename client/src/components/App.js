import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/app.css';
import * as actions from '../actions';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Signin from './Signin';
import Profile from './profile/Profile'

class App extends Component {

  constructor() {
    super();
    this.state = {
      showFooter: window.location.pathname == '/' ? false : true,
      showSidebar: false
    };
    console.log(this.state.isHidden);
  }


  componentDidMount() {
    console.log("here");
    this.props.fetchUser();
  }

  checkPath(){
    console.log("switcherd");
    if (window.location.pathname != '/'){
      this.setState({
        showFooter: true
      });
    }
    console.log(this.state.isHidden);
  }

  toggleSidebar() {
    this.setState(prevState => ({showSidebar: !prevState.showSidebar}));
  }

  render() {
    return (
        <BrowserRouter>
          <div class='wrapper'>
            <div class='content'>
              <Route exact path="/" component={Signin} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profile" component={Profile} />
              {this.state.showFooter && <Footer showSidebar={this.state.showSidebar} onToggle={this.toggleSidebar.bind(this)}/>}
            </div>
            <Sidebar showSidebar={this.state.showSidebar} />
          </div>
        </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App);
