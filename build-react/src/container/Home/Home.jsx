import React, { Component, Fragment } from 'react'
import YoutubeComponent from '../../components/YoutubeComponent/YoutubeComponent'
import Product from '../Product/Product'
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp'
import BlogPost from '../BlogPost/BlogPost'
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom'
import './Home.css'

export default class Home extends Component {

    state = {
        showComponent: true
    }

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Youtube</Link>
                        <Link to="/blog">Blogpost</Link>
                        <Link to="/counter">Product</Link>
                        <Link to="/lifecycle">Lifecycle</Link>
                    </div>
                    <Route path="/" exact component={YoutubeComponent}></Route>
                    <Route path="/blog" component={BlogPost}></Route>
                    <Route path="/counter" component={Product}></Route>
                    <Route path="/lifecycle" component={LifeCycleComp}></Route>
                </Fragment>
            </BrowserRouter>
        )
    }
}
