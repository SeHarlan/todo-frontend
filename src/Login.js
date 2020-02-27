import React, { Component } from 'react';
import { signUp, login } from './todo-api.js';

export default class Login extends Component {
    state = {
        signUpEmail: '',
        signUpPass: '',
        loginEmail: '',
        loginPass: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSignUp = async(e) => {
        e.preventDefault();
        const deets = {
            email: this.state.signUpEmail,
            password: this.state.signUpPass,
        }
        const user = await signUp(deets);
        this.props.getUserProp(user.body)
        this.props.routerProps.history.push('/');
    }
    handleLogin = async(e) => {
        e.preventDefault();
        const deets = {
            email: this.state.loginEmail,
            password: this.state.loginPass,
        }
        const user = await login(deets)
        this.props.getUserProp(user.body);
        this.props.routerProps.history.push('/');
    }
    render() {

        return (
            <form>
                    <label>
                        <span>Email </span>
                        <input type="email" name="signUpEmail" value={this.state.signUpEmail} onChange={this.handleChange} />
                    </label>
                    <label>
                        <span>Password </span>
                        <input type="password" name="signUpPass" value={this.state.signUpPass} onChange={this.handleChange} />
                    </label>
                    <button onClick={this.handleSignUp}>Sign Up!</button>
                    <br />
                    <label>
                        <span>Email </span>
                        <input type="email" name="loginEmail" value={this.state.loginEmail} onChange={this.handleChange} />
                    </label>
                    <label>
                        <span>Password </span>
                        <input type="password" name="loginPass" value={this.state.loginPass} onChange={this.handleChange} />
                    </label>
                    <button onClick={this.handleLogin}>Login!</button>
            </form>
        )
    }
}
