import React, { Component } from 'react'
import Counter from './Counter';

export default class CardProduct extends Component {
    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/product/ayam/Ayam+cut+up+4+-+title.jpg" alt="product" />
                </div>
                <p className="product-title">Ayam Utuh Frozen 0.4-0.5 Kg [isi 1 Ekor]</p>
                <p className="product-price">Rp 20,000</p>
                <Counter catchChange={(value) => this.props.onCounterChange(value)} onOrder={this.props.onOrder}/>
            </div>
        )
    }
}
