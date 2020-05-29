import React, { Component } from 'react';
import { Redirect  } from 'react-router-dom';

class Login extends Component {
    state = {
        goToSignUp: false
    };

    goToSignUp() {
        this.setState({
            goToSignUp: true
        });
    }

    login() {
        console.log('Login');
    }
 
    render() {
        return (
            <div>
                { this.state.goToSignUp ? <Redirect to="/sign-up" /> : ""}
                <input name="username" type="text" placeholder="User Name or Mobile"/>
                <input name="password" type="password" placeholder="Password"/>
                <button onClick={() => this.login()}>Sign In</button>
                <button onClick={() => this.goToSignUp()}>Go To Login</button>
            </div>
        );
    }
}
export default Login;
