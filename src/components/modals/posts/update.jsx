import Modal from 'react-bootstrap/Modal'

import CompsFormsPostsChange from '@/components/forms/posts/change'

export default function CompsModalsPostsUpdate({ show, initialValues, handleClose, handleSubmit }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Thread</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CompsFormsPostsChange
          handleSubmit={handleSubmit}
          initialValues={initialValues}
        />
      </Modal.Body>
    </Modal>
  )
}
