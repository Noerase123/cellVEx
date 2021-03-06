import React from 'react'
import {Form} from 'react-bootstrap'
import {IForm} from '../../interface/formval/FormVal'

const FormVal: React.FC<IForm> = props => {
  let {label, type, placeholder, value, onchange, disabled} = props
  return (
    <div>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onchange}
          disabled={disabled}
        />
      </Form.Group>
    </div>
  )
}

export default FormVal