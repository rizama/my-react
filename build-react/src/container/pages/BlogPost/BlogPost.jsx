import React, { Component, Fragment } from 'react'
import './BlogPost.css'
import Post from '../../../components/Post/Post'
import axios from 'axios'
import API from '../../../services/request'

export default class BlogPost extends Component {
    state = {
        posts: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1,
        },
        isUpdate: false,
        comments: []
    }

    async componentDidMount() {
        // GET data FROM API after component finish Mounted

        // Using Fetch default by ES6
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then((response) => response.json())
        // .then((json) => this.setState({
        //     posts : json
        // }))

        // Using axios
        await this.getDataAPI();
    }

    handleRemove = async (id) => {
        try {
            const local = true
            await API.DELETE('posts', local, id)
            await this.getDataAPI();
        } catch (error) {
            console.log(error);
        }
    }

    async getDataAPI() {
        const local = true
        let data = await API.GET('posts?_sort=id&_order=desc', local)
        let comments = await API.GET('comments', !local)
        this.setState({
            posts: data,
            comments: comments
        })
    }

    postDataAPI = () => {
        const local = true
        API.POST('posts', local, this.state.formBlogPost)
            .then((result) => {
                this.getDataAPI();
                this.setState({
                    formBlogPost: {
                        id: 1,  
                        title: '',
                        body: '',
                        userId: 1,
                    }
                })
            }, (err) => {
                console.error(err);
            })
    }

    putDataAPI = async () => {
        try {
            const local = true
            await API.PUT('posts', local, this.state.formBlogPost.id, this.state.formBlogPost);
            await this.getDataAPI();
            await this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1,
                },
                isUpdate: false
            })
        } catch (error) {
            console.log(error);
        }
    }

    handleUpdate = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleChange = (event) => {
        let copy_of_formBlogPost = { ...this.state.formBlogPost }
        let value_of_field = event.target.value
        let timestamp = new Date().getTime()
        if (!this.state.isUpdate) { copy_of_formBlogPost['id'] = timestamp }
        copy_of_formBlogPost[event.target.name] = value_of_field // akan mengedit sesuai attribute name nya.
        this.setState({
            formBlogPost: copy_of_formBlogPost
        })
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataAPI();
        } else {
            this.postDataAPI();
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
    }

    render() {
        return (
            <Fragment>
                <p className="title-page">Blog Post Page</p>
                <hr />
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="Input Your Title" onChange={this.handleChange} value={this.state.formBlogPost.title} />
                    <label htmlFor="body">Body</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="Input Content" onChange={this.handleChange} value={this.state.formBlogPost.body}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Save</button>
                </div>
                {/* {
                    this.state.comments.map((comment) => {
                        if (comment.id < 10) {
                            return (
                                <p key={comment.id}>{comment.name} - {comment.email}</p>
                            )
                        }
                    })
                } */}
                {
                    this.state.posts.map((post, index) => {
                        return (
                            <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                        )
                    })
                }
            </Fragment>
        )
    }
}
