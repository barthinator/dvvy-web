import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SignUp from './SignUp';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
        <BrowserRouter>
          <div>
            <Header />
            <div className='container'>
              <Route exact path="/" component={Landing} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/signup" component={SignUp} />
            </div>
          </div>
        </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App);
