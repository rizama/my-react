import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionUsername } from '../../../configs/redux/action';

class Login extends Component {
    render() {
        return (
            <div>
                <p>Login Page {this.props.userName}</p>
                <button onClick={this.props.changeUserName}>Go to Change Name</button>
                <button>Go to Login</button>
            </div>
        )
    }
}

const reduxState = (state) => ({
    popupProps: state.popup,
    userName: state.name
})

const reduxDispatch = (dispatch) => ({
    changeUserName: () => dispatch(actionUsername())
})

export default connect(reduxState, reduxDispatch)(Login);