import React, { Component } from 'react'
import YoutubeComponent from '../../components/YoutubeComponent/YoutubeComponent'
import Product from '../Product/Product'
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp'
import BlogPost from '../BlogPost/BlogPost'

export default class Home extends Component {

    state = {
        showFuckingComponent: true
    }

    render() {
        return (
            <div>
                <p>Youtube Component</p>
                <hr />
                <YoutubeComponent />
                
                <p>Counter</p>
                <hr />
                <Product />

                <p>Lifecycle</p>
                <hr />
                {
                    this.state.showFuckingComponent ? <LifeCycleComp max="5"/> : null
                }

                <p>Blog Post</p>
                <hr />
                <BlogPost />
            </div>
        )
    }
}
