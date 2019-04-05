import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Dashboard from './Dashboard';
import Signin from './Signin';
import Profile from './profile/Profile'

class App extends Component {

  constructor() {
    super();
    this.state = {
      isHidden: window.location.pathname == '/' ? true : false
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
          <div>
              <Route exact path="/" component={Signin} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profile" component={Profile} />
            <Header isHidden={this.state.isHidden}></Header>
          </div>
        </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App);
