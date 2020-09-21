import React, { Component, useState } from 'react'
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
