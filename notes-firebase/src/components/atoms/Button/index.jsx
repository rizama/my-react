import React from 'react'

export default function Button(props) {
    if (props.isLoading) {
        return (<button className="btn disable" >Loading...</button>)
    }
    return (
        <button className="btn" onClick={props.onClick}>{props.title}</button>
    )
}