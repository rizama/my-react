import React from 'react'
import { Link } from 'react-router-dom'


export default function index() {
    return (
        <div className="navigation">
            <Link to="/">Youtube</Link>
            <Link to="/blog">Blogpost</Link>
            <Link to="/counter">Product</Link>
            <Link to="/lifecycle">Lifecycle</Link>
            <Link to="/hooks">Hooks</Link>
        </div>
    )
}
