import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className='kendraMain'>
        <SignUp />
      </div>
    )
  }
})

var SignUp = React.createClass({
  render: function() {
    return (
      <div className="ryanSplashBody">
        <div className="ryanCenter">
          <Heading />
            <div className="kendraSignup" id="signup">
              <SignInForm />
              <img className="stickFam" src="../images/stickFam.png"/>
          </div>
        </div>
      </div>
    );
  }
});

var Heading = React.createClass({
  render: function() {
    return (
      <div className="heading">
        <h1 className="ryanSplashLogo">FRM</h1>
        <h2 className="ryanSlogan">Create an Account</h2>
      </div>
    );
  }
});

var SignInForm = React.createClass({
  render: function(){
    return (
      <form
      className="signUpForm">
        <input
          className="kendraInput"
          type='text'
          placeholder='First Name'
        />
        <input
          className="kendraInput"
          type='text'
          placeholder='Last Name'
        />
        <input
          className="kendraInput"
          type='text'
          placeholder='Email'
        />
        <input
          className="kendraInput"
          type='text'
          placeholder='City'
        />
        <input
          className="kendraInput"
          type='text'
          placeholder='Password'
        />
        <button className="ryanButton kendraButton">
          <Link to="/100/dashboard">Sign Up</Link>
        </button>
      </form>
    )
  }
});
