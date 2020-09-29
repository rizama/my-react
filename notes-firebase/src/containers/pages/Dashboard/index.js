import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getDataFromAPI, storeDataToAPI } from '../../../configs/redux/action';
import "./Dashboard.scss"

class Dashboard extends Component {
    state = {
        title: '',
        date: '',
        content: ''
    }

    async componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        const data = await this.props.getNotes(userData.uid)
        console.log('notes direct from action', data);
        console.log('notes from redux', this.props.notes);
    }

    handleOnChange = (event, type) => {
        this.setState({
            [type]: event.target.value
        })
    }

    handleSaveNotes = () => {
        const { title, content } = this.state
        const userData = JSON.parse(localStorage.getItem('userData'));
        const data = {
            title,
            content,
            date: new Date().getTime(),
            userId: userData.uid
        }
        this.props.saveNotes(data)
    }

    render() {
        const { title, content } = this.state
        const { notes } = this.props
        return (
            <div className="container">
                <p>Dashboard Page</p>
                <div className="input-form">
                    <input type="text" name="" id="title" placeholder="title" className="input-title" value={title} onChange={(event) => this.handleOnChange(event, 'title')} />
                    <textarea name="" id="content" cols="30" rows="10" placeholder="content" className="input-content" value={content} onChange={(event) => this.handleOnChange(event, 'content')}></textarea>
                    <button className="save-btn" onClick={this.handleSaveNotes}>Save</button>
                </div>
                <hr />
                {
                    notes.length > 0 ? (
                        <Fragment>
                            {
                                notes.map(note => {
                                    return (
                                        <div className="card-content" key={note.id}>
                                            <p className="title">{note.data.title}</p>
                                            <p className="date">{note.data.date}</p>
                                            <p className="content">{note.data.content}</p>
                                        </div>
                                    )
                                })
                            }
                        </Fragment>
                    ) : null
                }
                

            </div>
        )
    }
}

const reduxState = (state) => ({
    isLogin: state.isLogin,
    userData: state.user,
    notes: state.notes
})

const reduxDispatch = (dispatch) => ({
    saveNotes: (data) => dispatch(storeDataToAPI(data)),
    getNotes: (data) => dispatch(getDataFromAPI(data))
})

export default connect(reduxState, reduxDispatch)(withRouter(Dashboard));