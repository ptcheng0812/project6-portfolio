import Modal from 'react-bootstrap/Modal'

import CompsFormsThreadsChange from '@/components/forms/threads/change'

export default function CompsModalsThreadsUpdate({ show, initialValues, handleClose, handleSubmit }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Thread</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CompsFormsThreadsChange
          handleSubmit={handleSubmit}
          initialValues={initialValues}
        />
      </Modal.Body>
    </Modal>
  )
}
