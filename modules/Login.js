import React from 'react'
import { ReactDOM } from 'react-dom'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className='Login'>
        <Login />
      </div>
    )
  }
})

var Heading = React.createClass({
  render: function() {
    return (
      <div className="heading">
        <h1 className="ryanSplashLogo">Flake</h1>
        <h4 className="ryanSlogan">In a world filled with flaky people, those that honor commitments and do what they say STAND-OUT. Integrity is currency.</h4>
      </div>
    );
  }
});

var UserForm = React.createClass({
  login: function(e){
    e.preventDefault();
    $.ajax({
      url:"https://obscure-basin-16378.herokuapp.com/auth/login",
      method:'post',
      data:{
        userName:"kendralyndon@gmail.com",
        password:"password"
      }
    })
      console.log('you have reached the login function');
      return('hi')
  },
  render: function(){
    return (
      <form className="loginForm">
        <input
          className="ryanInput"
          type='text'
          name="email"
          placeholder='Email Address'
        />
        <input
          className="ryanInput"
          type='text'
          name="password"
          placeholder='Password'
        />
        <button className="ryanButton ryanSignupButton">
          <Link to="/signup">Sign Up</Link>
        </button>
        <button className="ryanButton" type="submit">
          <Link to="/1/dashboard">Log In</Link>
        </button>
      </form>
    )
  }
});

var Login = React.createClass({
  render: function() {
    return (
      <div id='splash'>
        <div className="ryanSplashBody">
          <div className="ryanCenter">
            <Heading />
              <div className="kendraLogin" id="login">
                <UserForm />
                <img className="stickFam" src="../images/flakes.jpeg"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
