import Modal from 'react-bootstrap/Modal'

import CompsFormsThreadsChange from '@/components/forms/threads/change'

export default function CompsModalsThreadsCreate({ show, handleClose, handleSubmit }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create A New Thread</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CompsFormsThreadsChange
          handleSubmit={handleSubmit}
          initialValues={{
            title: ''
          }}
        />
      </Modal.Body>
    </Modal>
  )
}
