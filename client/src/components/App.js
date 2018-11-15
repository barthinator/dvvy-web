import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SignUp from './signup/SignUpNew';
import Login from './login/LoginForm';
import Signin from './Signin';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
        <BrowserRouter>
          <div>
            <Header />
            <div>
              <Route exact path="/" component={Signin} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={Login} />
            </div>
          </div>
        </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App);
