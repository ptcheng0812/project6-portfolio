import Modal from 'react-bootstrap/Modal'

import CompsFormsNotificationsMessage from '@/components/forms/notifications/message'

export default function CompsModalsNotificationsCreate({ show, handleClose, handleSubmit, initialValues }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Send Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CompsFormsNotificationsMessage
          handleSubmit={handleSubmit}
          initialValues={initialValues}
        />
      </Modal.Body>
    </Modal>
  )
}
