import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Dashboard from './Dashboard';
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
            <div className='container'>
              <Route exact path="/" component={Signin} />
              <Route exact path="/dashboard" component={Dashboard} />
            </div>
          </div>
        </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App);
