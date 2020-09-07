import React, { Component } from 'react'
// import YoutubeComponent from '../../components/YoutubeComponent/YoutubeComponent'
// import Product from '../Product/Product'
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp'

export default class Home extends Component {
    data = [
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

    state = {
        showFuckingComponent: true
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showFuckingComponent: false
        //     })
        // }, 5000);
    }

    render() {
        return (
            <div>
                {/* <p>Youtube Component</p>
                <hr />
                {this.data.map(({time, title, desc}) => (
                    <YoutubeComponent time={time} title={title} desc={desc}/>
                ))}
                <p>Counter</p>
                <hr />
                <Product /> */}
                <p>Counter</p>
                <hr />
                {
                    this.state.showFuckingComponent ? <LifeCycleComp max="5"/> : null
                }
            </div>
        )
    }
}
