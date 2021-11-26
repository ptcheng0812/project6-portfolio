import Modal from 'react-bootstrap/Modal'

import CompsFormsProfileEdit from '@/components/forms/my-profile/change'

export default function CompsModalsMyProfileUpdate({ show, initialValues, handleClose, handleSubmit }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Thread</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CompsFormsProfileEdit
          handleSubmit={handleSubmit}
          initialValues={initialValues}
        />
      </Modal.Body>
    </Modal>
  )
}
