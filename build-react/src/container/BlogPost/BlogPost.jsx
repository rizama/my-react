import React, { Component, Fragment } from 'react'
import './BlogPost.css'
import Post from '../../components/Post/Post'
import axios from 'axios'

export default class BlogPost extends Component {
    state = {
        posts: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1,
        },
        isUpdate: false
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
            await axios.delete(`http://localhost:3004/posts/${id}`)
            await this.getDataAPI();
        } catch (error) {
            console.log(error);
        }
    }

    async getDataAPI() {
        let { data } = await axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        await this.setState({
            posts: data
        })
    }

    postDataAPI = () => {
        axios.post(`http://localhost:3004/posts`, this.state.formBlogPost)
            .then((res) => {
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
            await axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost);
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
        copy_of_formBlogPost[event.target.name] = value_of_field
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

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="Input Your Title" onChange={this.handleChange} value={this.state.formBlogPost.title} />
                    <label htmlFor="body">Body</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="Input Content" onChange={this.handleChange} value={this.state.formBlogPost.body}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Save</button>
                </div>
                {
                    this.state.posts.map((post, index) => {
                        return (
                            <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
                        )
                    })
                }
            </Fragment>
        )
    }
}
