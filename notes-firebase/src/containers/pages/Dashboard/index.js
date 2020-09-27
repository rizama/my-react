import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postNotesAPI } from '../../../configs/redux/action';
import "./Dashboard.scss"

class Dashboard extends Component {
    state = {
        title: '',
        date: '',
        content: ''
    }


    handlePage = (to) => {
        this.props.history.push(`/${to}`)
    }

    handleOnChange = (event, type) => {
        this.setState({
            [type]: event.target.value
        })
    }

    handleSaveNotes = () => {
        const { title, content } = this.state

        const data = {
            title,
            content,
            date: new Date().getTime(),
            userId: this.props.userData.uid
        }
        this.props.saveNotes(data)
    }

    // componentDidMount() {
    //     if (!this.props.isLogin) {
    //         this.props.history.push(`/login`)
    //     }
    // }

    render() {
        const { title, content } = this.state
        return (
            <div className="container">
                <p>Dashboard Page</p>
                <div className="input-form">
                    <input type="text" name="" id="title" placeholder="title" className="input-title" value={title} onChange={(event) => this.handleOnChange(event, 'title')} />
                    <textarea name="" id="content" cols="30" rows="10" placeholder="content" className="input-content" value={content} onChange={(event) => this.handleOnChange(event, 'content')}></textarea>
                    <button className="save-btn" onClick={this.handleSaveNotes}>Save</button>
                </div>
                <hr />
                <div className="card-content">
                    <p className="title">Title</p>
                    <p className="date">21 Sep 2020</p>
                    <p className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem expedita sapiente distinctio doloribus nam pariatur fuga tempora quibusdam nostrum impedit.</p>
                </div>

            </div>
        )
    }
}

const reduxState = (state) => ({
    isLogin: state.isLogin,
    userData: state.user
})

const reduxDispatch = (dispatch) => ({
    saveNotes: (data) => dispatch(postNotesAPI(data))
})

export default connect(reduxState, reduxDispatch)(withRouter(Dashboard));