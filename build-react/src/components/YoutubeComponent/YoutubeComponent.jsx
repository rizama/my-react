import React from 'react'
import './YoutubeComponent.css'

const YoutubeComponent = () => {
    let data = [
        {
            time: "8:00",
            title: "Learning ES5",
            desc: "ES5"
        },
        {
            time: "9:00",
            title: "Learning ES6",
            desc: "lorem"
        },
        {
            time: "10:00",
            title: "Learning ES2020",
            desc: "Javascript"
        },
        {
            time: "11:00",
            title: "Learning React",
            desc: "React"
        },
        {
            time: "12:00",
            title: "Learning Redux",
            desc: "Redux"
        },
    ]

    return (
        data.map((datum, index) => {
            return (
                <div className="youtube-wrapper" key={index}>
                    <div className="img-thumb">
                        <img src="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png" alt="" />
                        <p className="time">{datum.time}</p>
                    </div>
                    <p className="title">{datum.title}</p>
                    <p className="desc">{datum.desc}</p>
                </div>
            )
        })
    )
}

YoutubeComponent.defaultProps = {
    time: "00:00",
    title: "Untitiled",
    desc: "No Description"
}

export default YoutubeComponent