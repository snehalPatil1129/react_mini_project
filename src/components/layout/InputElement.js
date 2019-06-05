import React from 'react'
import {Form} from "react-bootstrap"

const InputElement = props => {
    return (
        <div>
            <Form.Label>{props.label}</Form.Label>
                <Form.Control 
                    type={props.type} 
                    placeholder={props.placeholder}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                     />
                     {
                         props.required ?  <Form.Text className="error">
                         {props.label} is required
                        </Form.Text> : null
                     }
               
        </div>
    )
}


export default InputElement
