import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import './Navigation.scss';


export default function index() {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">React Boostrap</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </Fragment>
    )
}