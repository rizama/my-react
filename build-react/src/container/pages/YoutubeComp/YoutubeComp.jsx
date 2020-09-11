import React, { Component, Fragment } from 'react'
import YoutubeComponent from '../../../components/YoutubeComponent/YoutubeComponent'

export default class YoutubeComp extends Component {
    render() {
        return (
            <Fragment>
                <p className="title-page">Youtube Page</p>
                <hr />
                <YoutubeComponent />
            </Fragment>
        )
    }
}
