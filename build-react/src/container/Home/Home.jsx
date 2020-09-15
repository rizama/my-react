// Library 
import React, { Component, createContext, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// Pages
import YoutubeComp from '../pages/YoutubeComp/YoutubeComp'
import Product from '../pages/Product/Product'
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp'
import BlogPost from '../pages/BlogPost/BlogPost'
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost'

// Style
import './Home.css'

export const RootContext = createContext()
const ProviderGlobal = RootContext.Provider

export default class Home extends Component {
    state = {
        totalOrder : 5
    }

    render() {
        return (
            <Router>
                <ProviderGlobal value={this.state}>
                    <Fragment>
                        <div className="navigation">
                            <Link to="/">Youtube</Link>
                            <Link to="/blog">Blogpost</Link>
                            <Link to="/counter">Product</Link>
                            <Link to="/lifecycle">Lifecycle</Link>
                        </div>
                        <Switch>
                            <Route path="/" exact component={YoutubeComp}></Route>
                            <Route path="/blog" component={BlogPost}></Route>
                            <Route path="/detail-post/:id" component={DetailPost}></Route>
                            <Route path="/counter" component={Product}></Route>
                            <Route path="/lifecycle" component={LifeCycleComp}></Route>
                        </Switch>
                    </Fragment>
                </ProviderGlobal>
            </Router>
        )
    }
}
