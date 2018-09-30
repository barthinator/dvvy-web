import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../styles/feed.css';



class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
      category: this.props.category
    };
  }

  renderPosts(){

    return(
    <Container className="post">
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
    );

  }

  render(){
    return(
      <div>
        <h1>{this.state.category}</h1>
        {this.renderPosts()}
      </div>
    );
  }
}

export default Feed;
