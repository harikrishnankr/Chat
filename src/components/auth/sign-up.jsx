import React, { Component } from 'react';
import { Redirect  } from 'react-router-dom';

class SignUp extends Component {
    state = {
        gotoLogin: false
    };

    gotoLogin() {
        this.setState({
            gotoLogin: true
        });
    }

    signUp() {
        console.log('Sign Up')
    }
 
    render() {
        return (
            <div>
                { this.state.gotoLogin ? <Redirect to="/login" /> : ""}
                <input name="firstName" type="text" placeholder="First Name"/>
                <input name="lastName" type="text" placeholder="Last Name"/>
                <input name="email" type="text" placeholder="Email"/>
                <input name="mobileNumber" type="text" placeholder="Mobile"/>
                <input name="password" type="password" placeholder="Password"/>
                <input name="confirmPassword" type="password" placeholder="Confirm Password"/>
                <button onClick={() => this.signUp()}>Sign Up</button>
                <button onClick={() => this.gotoLogin()}>Go To Login</button>
            </div>
        );
    }
}
export default SignUp;
