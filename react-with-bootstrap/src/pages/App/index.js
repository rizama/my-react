import About from 'pages/About/About';
import Contact from 'pages/Contact/Contact';
import Home from 'pages/Home/Home';
import NotFound from 'pages/404';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from 'parts/Navigation';
import Jumbotron from 'parts/Jumbotron';
import Layout from 'pages/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Fragment>
      <Router>
        <Navigation />
        <Jumbotron />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Layout>
      </Router>
    </Fragment>
  );
}

export default App;
