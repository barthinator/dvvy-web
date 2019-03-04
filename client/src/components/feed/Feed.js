import React, { Component } from 'react';
import { Container, Row, Col, Button, Tooltip } from 'reactstrap';
import _ from 'lodash';
import '../../styles/feed.css';
import profileImg from '../../img/profile.png';



class Feed extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      type: this.props.type,
      category: this.props.category,
      posts: [{}],
      tooltipOpen: false
    };
  }
  componentWillMount() {
    //This is where we would load from backend
    //But actually that's not how we would do it
    //We would need to load in with redux
    this.setState({
      posts: [
        {
          id: 1,
          name: 'JENN STEEL', 
          description: 'Up to fifty words Maximum here',
          user: ''
        },
        {
          id: 2,
          name: 'JENN STEEL2', 
          description: 'Bio bio bio boi boi Up to fifty words Maximum here'
        },
        {
          id: 3,
          name: 'David Roy Bartholomew', 
          description: 'My ass so fat its a miracle'
        },
        {
          id: 4,
          name: 'Justin Bieber', 
          description: 'Yo whatup its Justin hows it going'
        }
      ]
    })
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }


  render(){
    return(
      <div>
        <h1>{this.state.category}</h1>
        <div className="feedContainer">
          { this.state.posts.map((post) => (
            <div key={post.id}>
                <Container className="post">
                  <img  className='profileImg' src={profileImg} alt="Logo" />
                  <div className='buttons'>
                    {/* These will need to become buttons with images */}
                    <div>
                      <Tooltip autohide={false} placement="left" isOpen={this.state.tooltipOpen} target="TooltipExample" >
                        <Button className='circle-white'><p>[_v_]</p></Button>
                        <Button className='circle-white'><p>!</p></Button>
                      </Tooltip>
                      <Button onClick={() => this.setState({ tooltipOpen: !this.state.tooltipOpen })} id="TooltipExample" className='circle'><p>...</p></Button>
                    </div>
                    <Button className='circle'><p>[ ]</p></Button>
                    <Button className='circle'><p>❤</p></Button>
                  </div>
                  <Row>
                    <Col>
                      <div>{post.name}</div>
                    </Col>
                  </Row>
                  <Row className='description'>
                    <Col>{post.description}</Col>
                  </Row>
                  <Row>
                    <Col>Footer</Col>
                  </Row>
                </Container>
              </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Feed;
