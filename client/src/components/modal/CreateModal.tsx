import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import {IModal} from '../../interface/modal/modal'

const CreateModal: React.FC<IModal> = props => {
  let {title, show,handleSubmit, handleClose, children} = props
  
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            {children}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>Submit</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

export default CreateModal