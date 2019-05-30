import React from 'react';
import '../styles/dashboard.css';
import Feed from './feed/Feed';

class Dashboard extends React.Component {
  render(){
    return (
      <div>
      <h1>Dashboard</h1>
        <Feed type="sm" category="feed"/>
      </div>
    );
  }
};

export default Dashboard;
