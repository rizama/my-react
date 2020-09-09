import React, { Component, Fragment } from 'react'
import './BlogPost.css'
import Post from '../../components/Post/Post'
import axios from 'axios'

export default class BlogPost extends Component {
    state = {
        posts: []
    }

    async getDataAPI() {
        let { data } = await axios.get('http://localhost:3004/posts')
        this.setState({
            posts: data
        })
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
        console.log(id);
        try {
            await axios.delete(`http://localhost:3004/posts/${id}`)
            await this.getDataAPI();
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <p className="section-title">Blog Post</p>
                    {
                        this.state.posts.map((post, index) => {
                            return (
                                <Post key={post.id} data={post} remove={this.handleRemove} />
                            )
                        })
                    }
                </div>
            </Fragment>
        )
    }
}
