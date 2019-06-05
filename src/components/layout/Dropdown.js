import React from 'react'
import PropTypes from 'prop-types'
import {Form}from "react-bootstrap"
const Dropdown = props => {
    return (
        <div>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select Category</Form.Label>
                <Form.Control as="select" onChange={props.onChange}>
                    <option>Breads</option>
                    <option>Dairy</option>
                    <option>Fruits</option>
                    <option>Seasoning and Spices</option>
                    <option>Vegetables</option>
                </Form.Control>
                {
                    props.required ?  <Form.Text className="error">
                        Category is required
                    </Form.Text> : null
                     }
            </Form.Group>
        </div>
    )
}

Dropdown.propTypes = {

}

export default Dropdown
