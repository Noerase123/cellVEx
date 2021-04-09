import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import FormVal from '../form/FormVal'
import CreateModal from '../modal/CreateModal'

interface ICreate {
  addMethod: (params: any) => void
}

const CreateInput: React.FC<ICreate> = props => {
  let {addMethod} = props

  //modal open/close
  const [show, setShow] = useState<boolean>(false);

  //modal handling
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState<string>("")
  const [price, setPrice] = useState<string>("")
  const [quantity, setQuantity] = useState<string>("")
  const [type, setType] = useState<string>("")
  const [nutriLink, setNutriLink] = useState<string>("")

  const handleSubmit = async () => {
    setShow(false)

    const payload = {
      "name": name,
      "price": price,
      "quantity": quantity,
      "type": type,
      "nutrition": nutriLink
    }
    try {
      const response = await addMethod(payload)
    }
    catch (error) {
      console.log(error)
    }

  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        <i className="fa fa-plus"></i> Add
      </Button>

      <CreateModal
        title="Add Item"
        show={show}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
      >
      <FormVal
              label="Name"
              type="text"
              placeholder="Enter name"
              value={name}
              onchange={event => setName(event.target.value)}
            />
            <FormVal
              label="Price"
              type="text"
              placeholder="Enter price"
              value={price}
              onchange={event => setPrice(event.target.value)}
            />
            <FormVal
              label="Quantity"
              type="number"
              placeholder="Enter quantity"
              value={quantity}
              onchange={event => setQuantity(event.target.value)}
            />
            <FormVal
              label="Type"
              type="text"
              placeholder="Enter type"
              value={type}
              onchange={event => setType(event.target.value)}
            />
            <FormVal
              label="Nutrition Link"
              type="text"
              placeholder="Enter Link"
              value={nutriLink}
              onchange={event => setNutriLink(event.target.value)}
            />
      </CreateModal>
    </div>
  )
}
export default CreateInput