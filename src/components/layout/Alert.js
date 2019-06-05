import React from 'react'
import PropTypes from 'prop-types'
import {Alert} from "react-bootstrap";
const alert = props => {
    return (
        <Alert key={props.id} variant="danger">
            Something went wrong
        </Alert>
    )
}

alert.propTypes = {

}

export default alert
