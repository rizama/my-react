// Library 
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'

// Pages
import YoutubeComp from '../pages/YoutubeComp/YoutubeComp'
import Product from '../pages/Product/Product'
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp'
import BlogPost from '../pages/BlogPost/BlogPost'

// Style
import './Home.css'

export default class Home extends Component {

    state = {
        showComponent: true
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Youtube</Link>
                        <Link to="/blog">Blogpost</Link>
                        <Link to="/counter">Product</Link>
                        <Link to="/lifecycle">Lifecycle</Link>
                    </div>
                    <Route path="/" exact component={YoutubeComp}></Route>
                    <Route path="/blog" component={BlogPost}></Route>
                    <Route path="/counter" component={Product}></Route>
                    <Route path="/lifecycle" component={LifeCycleComp}></Route>
                </Fragment>
            </Router>
        )
    }
}
