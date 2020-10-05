// Library 
import React, { Component, createContext, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// Pages
import YoutubeComp from '../pages/YoutubeComp/YoutubeComp'
import Product from '../pages/Product/Product'
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp'
import BlogPost from '../pages/BlogPost/BlogPost'
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost'
import Hooks from '../pages/Hooks/Hooks'
import Navigation from '../../components/Navigation'

// Style
import './Home.css'
import GlobalProvider from '../../context/context'

class Home extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Navigation/>
                    <Switch>
                        <Route path="/" exact component={YoutubeComp}></Route>
                        <Route path="/blog" component={BlogPost}></Route>
                        <Route path="/detail-post/:id" component={DetailPost}></Route>
                        <Route path="/counter" component={Product}></Route>
                        <Route path="/lifecycle" component={LifeCycleComp}></Route>
                        <Route path="/hooks" component={Hooks}></Route>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default GlobalProvider(Home)