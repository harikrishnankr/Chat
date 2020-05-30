import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import Input from "@Core/input.jsx";
import Http from "@HttpClient";
import {
    object, string
} from "yup";
import "@Styles/auth.scss";
import "@Styles/button.scss"

class Login extends Component {

	constructor(props) {
		super(props);
        this.state = {
            goToSignUp: false,
            errorMessages: {
                username: '',
                password: ''
            }
        }
        this.goToSignUp = this.goToSignUp.bind(this);
        this.schema = object().shape({
            username: string().required('Enter an email or username'),
            password: string().required('Enter a password')
        });
    }

    goToSignUp() {
        this.setState({
            goToSignUp: true
        });
    }

    validate() {
        return this.schema.validate({
            username: this.username.value,
            password: this.password.value
        }, {
            abortEarly: false
        }).catch((err) => {
            const errors = {};
            err.inner.forEach(field => {
                errors[field.path] = field.message;
            });
            this.setState({
                ...this.state,
                errorMessages: errors
            })
        });
    }

    login() {
        this.validate().then(() => {
            Http.post({
                url: 'user/authenticate',
                body: {
                    username: this.username.value,
                    password: this.password.value
                }
            })
            .then(res=> {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
        });

    }
	
    render() {
        return (
        	<div className="container">
                { this.state.goToSignUp ? <Redirect to="/sign-up" /> : ""}
                <div className="form-wrapper">
                    <div className="logo"></div>
                    <div className="sign-in-form">
                        <h2>Sign In</h2>
                        <form noValidate={true}>
                            <div className="form-group">
                                <Input 
                                    className="login-input" 
                                    placeholder="Email"
                                    autofocus="true"
                                    errorMessage={this.state.errorMessages.username}
                                    inputRef={ (input) => this.username = input }
                                />
                            </div>
                            <div className="form-group">
                                <Input 
                                    type="password" 
                                    className="login-input" 
                                    placeholder="Password"
                                    errorMessage={this.state.errorMessages.password}
                                    inputRef={ (input) => this.password = input }
                                />
                            </div>
                            <div className="button-group">
                                <button className="c-button primary" type="submit" onClick={() => this.login()}>
                                    Login
                                </button>
                            </div>
                            <div className="button-group">
                                <button className="c-button" type="button" onClick={() => this.goToSignUp() }>
                                    Don't have an account?
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        	</div>
        );
    }
}
export default Login;