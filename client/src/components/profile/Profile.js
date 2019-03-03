import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../styles/profile.css';



class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "David Bartholomew"
    };
  }


  render(){
    return(
      <div>
        <h1>Profile: {this.state.name}</h1>
        <Container>
          <Row>
            <Col>Header</Col>
          </Row>
          <Row>
            <Col>Body</Col>
          </Row>
          <Row>
            <Col>Footer</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
