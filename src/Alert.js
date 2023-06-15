import React from 'react'

export default function Alert(props) {
    return (
        props.state && <div className={`alert alert-${props.state.type} d-flex align-items-center justify-content-center alert-dismissible fade show`} role="alert">
            {props.state.message}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    )
}
