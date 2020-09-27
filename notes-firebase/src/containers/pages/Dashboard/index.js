import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Dashboard extends Component {
    handlePage = (to) => {
        this.props.history.push(`/${to}`)
    }

    componentDidMount() {
        if (!this.props.isLogin) {
            this.props.history.push(`/login`)
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <p>Dashboard Page</p>
                <button onClick={() => this.handlePage('register')}>Go to Register</button>
                <button onClick={() => this.handlePage('login')}>Go to Login</button>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLogin: state.isLogin
})

export default connect(reduxState)(withRouter(Dashboard));