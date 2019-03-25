import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactDOM from 'react-dom';
import profilepic from '../../img/profilepic.jpeg';

console.log(profilepic);

function Header() {

  return <img src={profilepic} alt="Profile" />;
}

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "David Bartholomew"
    };
  }


  render(){
    document.body.style.backgroundColor = "white";


    return(
      <div>
        <Container>
          <Row>
            <Col xs="auto">
            <img className="profilepic" alt="Profile" src={profilepic} style={{width: 200, height: 200, borderRadius: 400/ 2}}/>
            </Col>
            <Col lg="auto">
            <h1 style={{ color: '#373738' }}>{this.state.name.toUpperCase()}</h1>
            <body style={{ color: '#373738' } }> BIO BIO BIO </body>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
