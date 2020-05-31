import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import Input from "@Core/input";
import Http from "@HttpClient";
import {
    object, string
} from "yup";
import "@Styles/auth.scss";
import "@Styles/button.scss"

class SignUp extends Component {

	constructor(props) {
        super(props);
        this.signUpForm = {};
        this.state = {
            goToLogin: false,
            errorMessages: {
                email: '',
                username: '',
                firstName: '',
                lastName: '',
                password: '',
                confirmPwd: ''
            }
        }
        this.goToLogin = this.goToLogin.bind(this);
        this.schema = object().shape({
            username: string(),
            email: string(),
            firstName: string().required('Enter the first name'),
            lastName: string().required('Enter the last name'),
            password: string().required('Enter the password'),
            confirmPwd: string().required('Confirm password is mandatory')
        });
    }

    goToLogin() {
        this.setState({
            goToLogin: true
        });
    }

    getUserOrEmail() {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.signUpForm.emailOrUserName.value) ?
        {
            email: this.signUpForm.emailOrUserName.value, username: ''
        } : {
            email: '', username: this.signUpForm.emailOrUserName.value
        };
    }

    clearErrorMessages() {
        this.setState({
            ...this.state,
            errorMessages: {}
        })
    }

    validate(model) {
        this.clearErrorMessages();
        return this.schema.validate({
            ...model
        }, {
            abortEarly: false
        }).catch((err) => {
            const errors = {
                username: (!model.username || !model.email) ? 'Enter email/username mandatory' : ''
            };
            err.inner.forEach(field => {
                errors[field.path] = field.message;
            });
            this.setState({
                ...this.state,
                errorMessages: errors
            })
        });
    }

    signUp() {
        const {email,username} = this.getUserOrEmail();
        const model = {
            email: email,
            username: username,
            firstName: this.signUpForm.firstName.value,
            lastName: this.signUpForm.lastName.value,
            password: this.signUpForm.password.value,
            confirmPwd: this.signUpForm.confirmPwd.value
        }
        this.validate(model).then(() => {
            Http.post({
                url: 'user/new',
                body: {
                    email: email,
                    username: username,
                    firstName: this.signUpForm.firstName.value,
                    lastName: this.signUpForm.lastName.value,
                    password: this.signUpForm.password.value
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
                { this.state.goToLogin ? <Redirect to="/login" /> : ""}
                <div className="form-wrapper">
                    <div className="logo"></div>
                    <div className="sign-in-form">
                        <h2>Sign Up</h2>
                        <form noValidate={true}>
                        <div className="form-group">
                                <Input 
                                    className="login-input" 
                                    placeholder="First name"
                                    autofocus="true"
                                    errorMessage={this.state.errorMessages.firstName}
                                    inputRef={ (input) => this.signUpForm.firstName = input }
                                />
                            </div>
                            <div className="form-group">
                                <Input 
                                    className="login-input" 
                                    placeholder="Last name"
                                    errorMessage={this.state.errorMessages.lastName}
                                    inputRef={ (input) => this.signUpForm.lastName = input }
                                />
                            </div>

                            <div className="form-group">
                                <Input 
                                    className="login-input" 
                                    placeholder="Email/Username"
                                    errorMessage={this.state.errorMessages.username}
                                    inputRef={ (input) => this.signUpForm.emailOrUserName = input }
                                />
                            </div>
                            <div className="form-group">
                                <Input 
                                    type="password" 
                                    className="login-input" 
                                    placeholder="Password"
                                    errorMessage={this.state.errorMessages.password}
                                    inputRef={ (input) => this.signUpForm.password = input }
                                />
                            </div>
                            <div className="form-group">
                                <Input 
                                    type="password" 
                                    className="login-input" 
                                    placeholder="Confirm Password"
                                    errorMessage={this.state.errorMessages.confirmPwd}
                                    inputRef={ (input) => this.signUpForm.confirmPwd = input }
                                />
                            </div>
                            <div className="button-group">
                                <button className="c-button primary" type="submit" onClick={() => this.signUp()}>
                                    Login
                                </button>
                            </div>
                            <div className="button-group">
                                <button className="c-button" type="button" onClick={() => this.goToLogin() }>
                                    Already have an account?
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        	</div>
        );
    }
}
export default SignUp;