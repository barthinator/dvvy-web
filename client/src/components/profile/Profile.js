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
        <img className="headerimg" src={headerimg}/>
        <Container className="mainContainer">
          <Row>
            <Col lg="2">
              <img className="profilepic" alt="Profile" src={profilepic} style={{borderRadius: 400/ 2}}/>
            </Col>
            <Col className="textCol" lg={{size: 5}}>
              <h1 class="profilename" style={{ color: '#373738' }}>{this.state.name.toUpperCase()}</h1>
              <body class="bio" style={{ color: '#373738' } }> BIO BIO BIO </body>
            </Col>
            <div className="headerContainer">
            <Col lg="3">
              <Button class="numTxt" id="fansBtn">6969 <span class="fansTxt">fans</span></Button>
            </Col>
            <Col lg="2">
              <Button id="fansBtn">...</Button>
            </Col>
            </div>
          </Row>
          <Row>
            <Col md="4">
              <Button id="feedBtn">FEED</Button>
            </Col>
            <Col md="4">
              <Button id="listingsBtn">LISTINGS</Button>
            </Col>
            <Col md="4">
              <Button id="composeBtn">C</Button>
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
