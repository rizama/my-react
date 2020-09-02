import React from 'react'
import './YoutubeComponent.css'

const YoutubeComponent = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComponent.defaultProps = {
    time: "00:00",
    title: "Untitiled",
    desc: "No Description"
}

export default YoutubeComponent