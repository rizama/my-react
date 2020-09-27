import React, { Component } from 'react'
import { connect } from 'react-redux';
import Button from '../../../components/atoms/Button';
import { loginUserAPI } from '../../../configs/redux/action';
import { withRouter } from 'react-router-dom';



class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleLoginSubmit = async () => {
        console.log(this.props);
        const { email, password } = this.state
        const { history } = this.props;
        console.log(`Data before send: ${email}, ${password}`);
        const result = await this.props.loginUser({ email, password }).catch(err => err)

        if (result) {
            console.log('login success');
            this.setState({
                email: '',
                password: ''
            })
            history.push('/')
        } else {
            console.log('login failed');
        }
    }


    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Login Page</p>
                    <input className="input" id="email" type="email" placeholder="email" onChange={this.handleChangeText} value={this.state.email} />
                    <input className="input" id="password" type="password" placeholder="password" onChange={this.handleChangeText} value={this.state.password} />
                    <Button onClick={this.handleLoginSubmit} title="Login" isLoading={this.props.sedangLoading} />
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    sedangLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    loginUser: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(withRouter(Login));