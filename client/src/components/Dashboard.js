import React from 'react';
import '../styles/dashboard.css';
import Feed from './feed/Feed.js';
import Header from './Header.js';

class Dashboard extends React.Component {
  render(){
    return (
      <div>
      <h1>Dashboard</h1>
        <Feed type="sm" category="collab"/>
      </div>
    );
  }
};

export default Dashboard;
