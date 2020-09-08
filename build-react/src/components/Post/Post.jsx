import React from 'react'

function Post(props) {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="https://placeimg.com/200/150/any" alt="post" />
            </div>
            <div className="content">
                <p className="title">{props.title}</p>
                <p className="desc">{props.desc}</p>
            </div>
        </div>
    )
}

export default Post

