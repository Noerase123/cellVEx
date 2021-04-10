import React from 'react'
import { Form } from 'react-bootstrap'

interface IProps {
  label: string
  value: string
  default_item: string
  items: string[]
  onchange?: (param: any) => void
}

const DropDown: React.FC<IProps> = props => {
  let {label, default_item, items, onchange, value} = props
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
        <Form.Control as="select" onChange={onchange}>
          <option value={value}>{default_item}</option>
          {items.map(item => {
            return (
              <option value={item}>{item}</option>
            )
          })}
        </Form.Control>
    </Form.Group>
  )
}

export default DropDown