import React, { Component } from 'react'
import "./Register.scss"
import firebase from '../../../configs/firebase';


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
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log(`Success: ${res}`)
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log(errorCode, errorMessage);
            });
    }


    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" id="email" type="text" placeholder="email" onChange={this.handleChangeText} />
                    <input className="input" id="password" type="password" placeholder="password" onChange={this.handleChangeText} />
                    <button className="btn" onClick={this.handleRegisterSubmit}>Register</button>
                </div>
                {/* <button>Go to Login</button> */}
            </div>
        )
    }
}

export default Register;