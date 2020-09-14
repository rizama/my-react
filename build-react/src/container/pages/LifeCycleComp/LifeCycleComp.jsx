import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import './LifeCycleComp.css';

const mapStateToProps = (stateGlobal) => {
    return {
        order: stateGlobal.totalOrder
    }
}

export default connect(mapStateToProps)(class LifeCycleComp extends Component {
    constructor(props) {
        // karena kita extends Component, maka perlu super()
        super(props)

        this.state = {
            count: 1
        }
        console.log('constructor');

    }

    static getDerivedStateFromProps(props, state) {
        console.group('getDerivedStateFromProps');
        console.log('props', props);
        console.log('state', state);
        console.groupEnd()
        return true;
    }

    componentDidMount() {
        console.log('componentDidMount');
        // setTimeout(() => {
        //     this.setState({
        //         count: 4
        //     }) 
        // }, 4000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.group('shouldComponentUpdate');
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);
        console.log('thisState', this.state);
        console.groupEnd()
        // console.log(parseInt(nextProps.max));

        // comparation use nextProps and nextState
        // if (parseInt(nextProps.max) < nextState.count) {
        //     return false;
        // }
        // return true;

        // comparation use this.state and nextState
        if (this.state.count >= 5) {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.group('getSnapshotBeforeUpdate');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.groupEnd()
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.group('componentDidUpdate');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('snapshot', snapshot);
        console.groupEnd()
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    // Fungsi manual bukan lifecycle
    changeCount = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        console.log('render');
        return (
            <Fragment>
                <p className="title-page">LifeCycle Page</p>
                <hr />
                <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
                <hr />

                <p> Total Order: {this.props.order}</p>
            </Fragment>
        )
    }
})
