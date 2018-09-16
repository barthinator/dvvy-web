import React, { Component } from 'react';
import '../styles/sign-up.css';
import GoogleImg from '../img/google_dark.png';

//// TODO: Implement a custom sign in feature with redux-form ( look at the surveys folder for reference )

class SignUp extends Component{
  render(){
    return(
      <div className="sign-up">
        <h1> Welcome to dvvy! </h1>
        <h3> Please sign up below </h3>
        <form>
          <p> Email </p>
          <input className="field"></input>
          <p> Password </p>
          <input className="field"></input>
        </form>
        <a href="/auth/google"><img src={GoogleImg}></img></a>
      </div>
    );
  };
}

export default SignUp;
