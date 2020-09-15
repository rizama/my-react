import React, { Component, Fragment } from 'react'
import './Product.css'
import CardProduct from './CardProduct/CardProduct'
import { connect } from 'react-redux'
import { RootContext } from '../../Home/Home'

// state pada fungsi ini merupakan stateGlobal yang dipanggil dari index.js
const mapStateToProps = (stateGlobal) => {
    return {
        order: stateGlobal.totalOrder
    }
}

class Product extends Component {
    // state = {
    //     order: 0
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    // Jika Pakai Props atau Redux
    // render() {
    //     return (
    //         <Fragment>
    //             <p className="title-page">Product Page</p>
    //             <hr />
    //             <div className="header">
    //                 <div className="logo">
    //                     <img src="https://etanee.id/img/content/img_logo_etanee_white.svg" alt="syalala"/>
    //                 </div>
    //                 <div className="troley">
    //                     <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt="icon"/>
    //                     <div className="count">{this.props.order}</div>
    //                 </div>
    //             </div>
    //             {/* <CardProduct onCounterChange={this.handleCounterChange} onOrder={this.state.order}/> */}

    //             {/* jika memakai redux */}
    //             <CardProduct/>
    //         </Fragment>
    //     )
    // }

    // Jika Pakai Context
    render() {
        return (
            <RootContext.Consumer>
                {
                    value => {
                        return (
                            <Fragment>
                                <p className="title-page">Product Page</p>
                                <hr />
                                <div className="header">
                                    <div className="logo">
                                        <img src="https://etanee.id/img/content/img_logo_etanee_white.svg" alt="syalala" />
                                    </div>
                                    <div className="troley">
                                        <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt="icon" />
                                        <div className="count">{value.state.totalOrder}</div>
                                    </div>
                                </div>
                                <CardProduct />
                            </Fragment>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }

}

// Using Redux
// export default connect(mapStateToProps)(Product);

export default Product;