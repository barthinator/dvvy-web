import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactDOM from 'react-dom';
import profilepic from '../../img/profilepic.jpeg';
import headerimg from '../../img/cityheader.jpg'
import '../../styles/profile.css';
import { Button } from 'reactstrap';
import Feed from '../feed/Feed.js';


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
            <Col>
              <img className="headerimg" src={headerimg}/>
            </Col>
          </Row>
          <Row className="toprow">
            <Col xs="auto">
              <img className="profilepic" alt="Profile" src={profilepic} style={{borderRadius: 400/ 2}}/>
            </Col>
            <Col lg="auto">
              <h1 class="profilename" style={{ color: '#373738' }}>{this.state.name.toUpperCase()}</h1>
              <body class="bio" style={{ color: '#373738' } }> BIO BIO BIO </body>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <Button id="feedBtn">FEED</Button>
            </Col>
            <Col sm="4">
              <Button id="listingsBtn">LISTINGS</Button>
            </Col>
            <Col sm="4">
              <Button id="composeBtn">C</Button>
            </Col>
            <Col>
              <Button id="fansBtn">fans</Button>
            </Col>
          </Row>
          <Row>
            <Col sm="8">
              <Feed type="sm" category="feed"/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
