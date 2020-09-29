import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getDataFromAPI, storeDataToAPI, updateDataToAPI } from '../../../configs/redux/action';
import "./Dashboard.scss"

class Dashboard extends Component {
    state = {
        title: '',
        date: '',
        content: '',
        textButton: 'simpan',
        noteId: ''
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
        const { title, content, textButton } = this.state
        const userData = JSON.parse(localStorage.getItem('userData'));
        const data = {
            title,
            content,
            date: new Date().getTime(),
            userId: userData.uid,
            noteId: this.state.noteId
        }
        if (textButton === 'simpan') {
            this.props.saveNotes(data)
        } else {
            this.props.updateNotes(data)
        }
    }

    changeFormToUpdate = ({ data, id }) => {
        console.log(data, id);
        this.setState({
            title: data.title,
            content: data.content,
            textButton: 'update',
            noteId: id
        })

    }

    cancelUpdate = () => {
        this.setState({
            title: '',
            content: '',
            textButton: 'simpan'
        })
    }

    render() {
        const { title, content, textButton } = this.state
        const { notes } = this.props
        const { cancelUpdate, handleSaveNotes, handleOnChange } = this
        return (
            <div className="container">
                <p>Dashboard Page</p>
                <div className="input-form">
                    <input type="text" name="" id="title" placeholder="title" className="input-title" value={title} onChange={(event) => handleOnChange(event, 'title')} />
                    <textarea name="" id="content" cols="30" rows="10" placeholder="content" className="input-content" value={content} onChange={(event) => handleOnChange(event, 'content')}></textarea>
                    <div className="action-wrapper">
                        {
                            textButton === "update" ? <button className="save-btn cancel" onClick={cancelUpdate}>Cancel</button> : <div></div>
                        }
                        <button className="save-btn" onClick={handleSaveNotes}>{textButton}</button>
                    </div>
                </div>
                <hr />
                {
                    notes.length > 0 ? (
                        <Fragment>
                            {
                                notes.map(note => {
                                    return (
                                        <div className="card-content" key={note.id} onClick={() => this.changeFormToUpdate(note)}>
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
    getNotes: (data) => dispatch(getDataFromAPI(data)),
    updateNotes: (data) => dispatch(updateDataToAPI(data))
})

export default connect(reduxState, reduxDispatch)(withRouter(Dashboard));