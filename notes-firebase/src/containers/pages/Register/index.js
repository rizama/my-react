import React, { Component } from 'react'
import "./Register.scss"
import Button from '../../../components/atoms/Button';
import { registerUserAPI } from '../../../configs/redux/action';
import { connect } from 'react-redux';


class Register extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleRegisterSubmit = () => {
        const { email, password } = this.state
        console.log(`Data before send: ${email}, ${password}`);
        this.props.registerAPI({email, password})
        this.setState({
            email: '',
            password: ''
        })
    }


    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" id="email" type="text" placeholder="email" onChange={this.handleChangeText} value={this.state.email}/>
                    <input className="input" id="password" type="password" placeholder="password" onChange={this.handleChangeText} value={this.state.password}/>
                    <Button onClick={this.handleRegisterSubmit} title="Register" isLoading={this.props.loadingCuy}/>
                </div>
                {/* <button>Go to Login</button> */}
            </div>
        )
    }
}

const reduxState = (state) => ({
    loadingCuy: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register);