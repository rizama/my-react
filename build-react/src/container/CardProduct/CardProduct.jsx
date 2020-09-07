import React, { Component } from 'react'

export default class CardProduct extends Component {
    // Uncomment this if you want to use state here
    // state = {
    //     order: this.props.onOrder
    // }

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

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/product/ayam/Ayam+cut+up+4+-+title.jpg" alt="product" />
                </div>
                <p className="product-title">Ayam Utuh Frozen 0.4-0.5 Kg [isi 1 Ekor]</p>
                <p className="product-price">Rp 20,000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}> - </button>
                    {/* <input type="text" value={this.state.order}/> */}
                    <input type="text" value={this.props.onOrder} onChange={() => true}/>
                    <button className="plus" onClick={this.handlePlus}> + </button>
                </div>
            </div>
        )
    }
}
