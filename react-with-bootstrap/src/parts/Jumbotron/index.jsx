import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import './Jumbo.scss'

function index() {
    return (
        <div>
            <Jumbotron fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Welcome</h1>
                    <p>Bootstrap with react</p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default index
