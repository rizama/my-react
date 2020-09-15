import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionType from '../../../../redux/reducer/globalActionType'

// state pada fungsi ini merupakan stateGlobal yang dipanggil dari index.js
const mapStateToProps = (stateGlobal) => {
    return {
        order: stateGlobal.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}),
        handleMinus: () => dispatch({type: ActionType.THROW_ORDER})
    }
}

class Counter extends Component {
    // Uncomment this if you want to use state here
    // state = {
    //     order: this.props.onOrder
    // }

    handleCounterChange = (newValue) => {
        this.props.catchChange(newValue)
    }

    handlePlus = () => {
        // Uncomment this if you want to use state here
        // this.setState({
        //     order: this.state.order + 1
        // }, () => {
        //     this.handleCounterChange(this.state.order);
        // })
        
        // use value order from Product.jsx
        let newVal = this.props.onOrder + 1
        this.handleCounterChange(newVal);
    }

    handleMinus = () => {
        if (this.props.onOrder > 0) {

            // Way 1
            // Uncomment this if you want to use state here
            // this.setState({
            //     order: this.state.order - 1
            // }, () => {
            //     this.handleCounterChange(this.state.order);
            // })

            // Way 2
            // use value order from Product.jsx
            let newVal = this.props.onOrder - 1
            this.handleCounterChange(newVal);
        }
    }

    render() {
        return (
            <div className="counter">
                {/* If use Redux */}
                {/* <button className="minus" onClick={this.props.handleMinus}> - </button>
                <input type="text" value={this.props.order} onChange={() => true} />
                <button className="plus" onClick={this.props.handlePlus}> + </button> */}

                {/* If use props from Product and local function */}
                {/* <button className="minus" onClick={this.handleMinus}> - </button>
                <input type="text" value={this.state.order} onChange={() => true}/>
                <button className="plus" onClick={this.handlePlus}> + </button> */}

                {/* If use Context */}
                <button className="minus" onClick={()=>null}> - </button>
                <input type="text" value={0} onChange={() => true} />
                <button className="plus" onClick={()=>null}> + </button>
            </div>
        )
    }
}

// Using Redux
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;