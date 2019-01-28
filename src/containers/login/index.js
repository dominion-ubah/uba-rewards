import React, { Component } from 'react'
import "../../App.css";


export default class LoginContainer extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    fakeauth () {

        // localStorage.setItem('auth', 'authenticated')
        this.props.history.push('/');
    }
    
  render() {
    return (
      <div className="Login pt-5x">
        
        <div className="login-card login-width center-align-box py-1x px-5s">
        <div className="box">
            <p className="header2 dis-inline-block float-l">
                Sign In
            </p>
            <div className="uba-red-logo float-r"></div>
        </div>
        <div className="box ">
            <div className="form-field pt-5s">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" />
            </div>
            <div className="form-field pt-5s">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" />
                <p className="caption-one pt-5s">Forgot Your Password?</p>
            </div>
            {/* <a href="/"> */}
            <div className="form-field pt-5s" onClick={this.fakeauth.bind(this)}> 
                <div className="uba-red-bg text-white">
                    <p>Login</p>
                    <span className="float-r pt-5s pr-5s">></span>
                </div>
            </div>
            {/* </a> */}
            <div className="form-field pt-5s">
            <p className="caption-two pb-1s">Don't have an account?</p>
                <div className="uba-inv-btn">
                    <p className="text-uba-red"> Request for Access</p>
                    <span className="float-r pt-5s pr-5s">></span>
                </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
