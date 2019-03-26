import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactDOM from 'react-dom';
import profilepic from '../../img/profilepic.jpeg';
import '../../styles/profile.css';
import { Button } from 'reactstrap';

console.log(profilepic);

function Header() {

  return <img src={profilepic} alt="Profile" />;
}

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Stephen Christian"
    };
  }


  render(){
    document.body.style.backgroundColor = "white";


    return(
      <div>
        <Container>
          <Row>
            <Col xs="auto">
              <img className="profilepic" alt="Profile" src={profilepic} style={{width: 230, height: 230, borderRadius: 400/ 2}}/>
            </Col>
            <Col lg="auto">
              <h1 style={{ color: '#373738' }}>{this.state.name.toUpperCase()}</h1>
              <body class="bio" style={{ color: '#373738' } }> BIO BIO BIO </body>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <Button id="feedBtn">FEED</Button>{' '}
            </Col>
            <Col xs="4">
              <Button id="listingsBtn">LISTINGS</Button>{' '}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
