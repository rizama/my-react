import React, { Component } from 'react'
import YoutubeComponent from '../../components/YoutubeComponent/YoutubeComponent'
import Product from '../Product/Product'

const data = [
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

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* <p>Youtube Component</p>
                <hr />
                {data.map(({time, title, desc}) => (
                    <YoutubeComponent time={time} title={title} desc={desc}/>
                ))} */}
                <Product />
            </div>
        )
    }
}
