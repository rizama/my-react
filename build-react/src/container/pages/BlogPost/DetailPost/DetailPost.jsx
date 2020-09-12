import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './DetailPost.css'

export default class DetailPost extends Component {
    state = {
        post: {}
    }
    componentDidMount() {
        let id = this.props.match.params.id
        axios.get(`http://localhost:3004/posts/${id}`)
            .then(res => {
                this.setState({
                    post: res.data
                }, () => {
                    console.log(this.state.post);
                })
            })
    }

    render() {
        return (
            <Fragment>
                <div className="p-detail-post">
                    <p className="detail-title">Title: {this.state.post.title}</p>
                    <p className="detail-body">Description: {this.state.post.body}</p>
                </div>
            </Fragment>
        )
    }
}
