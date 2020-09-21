import React, { Component, useState, useEffect } from 'react'
import './Hooks.css'

// class Hooks extends Component {
//     state = {
//         value: 0
//     }

//     handleIncrement = () => {
//         this.setState({
//             value: this.state.value + 1
//         })
//     }

//     componentDidMount() {
//         document.title = `My Value: ${this.state.value}`
//     }

//     componentDidUpdate() {
//         document.title = `My Value: ${this.state.value}`
//     }

//     componentWillUnmount() {
//         document.title = `React App`
//     }

//     render() {
//         return (
//             <div className="p-hooks">
//                 <p className="title-page">Hooks Page</p>
//                 <hr />
//                 <p>Nilai Saya saat ini: {this.state.value}</p>
//                 <button onClick={this.handleIncrement}>Update Nilai</button>
//             </div>
//         )
//     }
// }

const Hooks = () => {
    const [Count, setCount] = useState(0)

    useEffect(() => {
        document.title = `My Value: ${Count}`
        return () => {
            document.title = `React App`
        }
    }, [Count])

    return (
        <div className="p-hooks">
            <p className="title-page">Hooks Page</p>
            <hr />
            <p>Nilai Saya saat ini: {Count}</p>
            <button onClick={() => setCount(Count + 1)}>Update Nilai</button>
        </div>
    )
}


export default Hooks;
