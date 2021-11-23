import Modal from 'react-bootstrap/Modal'

import CompsFormsAuthLogin from '@/components/forms/auth/login'

export default function CompsModalsAuthLogin({ show, handleClose, handleSubmit }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>SignUp</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CompsFormsAuthLogin
          handleSubmit={handleSubmit}
          initialValues={{
            email: '',
            password: ''
          }}
        />
      </Modal.Body>
    </Modal>
  )
}
