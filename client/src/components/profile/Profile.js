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
        <div className="mainContainer">
        <img className="profilepic" alt="Profile" src={profilepic} style={{borderRadius: 400/ 2}}/>
          <Row style={{marginTop: -120}}>
            <Col lg="2">
            </Col>
            <Col className="textCol" lg={{size: 6}}>
              <h1 class="profilename" style={{ color: '#373738' }}>{this.state.name.toUpperCase()}</h1>
            </Col>
            <Col className="textCol"  lg={{size: 2, offset: 1}}>
              <Button style={{width: "100%", marginTop: 20}} className="numTxt" id="fansBtn">6969 <span class="fansTxt">fans</span></Button>
            </Col>
            <Col className="textCol" lg="1">
              <Button  style={{width: "100%", marginTop: 20}} id="fansBtn">...</Button>
            </Col>
          </Row>
          <Row>
            <Col className="textCol" style={{marginTop: -40, paddingTop: 0}} lg={{size: 6, offset: 2}}>
            <p class="bio" style={{ color: '#373738' } }> BIO BIO BIO </p>
            </Col>
            <Col className="textCol"  lg={{size: 3, offset: 1}}>
              <Button style={{width: "100%", marginTop: -40, paddingTop: 0}} id="fansBtn">6969 <span class="fansTxt">fans</span></Button>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Button id="feedBtn">FEED</Button>
            </Col>
            <Col md="3">
              <Button id="listingsBtn">LISTINGS</Button>
            </Col>
            <Col md="2">
              <Button id="composeBtn">C</Button>
            </Col>
          </Row>
          <Row>
            <Col sm="8">
              <Feed type="sm" category="feed"/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Profile;
