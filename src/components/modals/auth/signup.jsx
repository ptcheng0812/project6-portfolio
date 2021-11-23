import Modal from 'react-bootstrap/Modal'

import CompsFormsAuthSignUp from '@/components/forms/auth/signup'

export default function CompsModalsAuthSignUp({ show, handleClose, handleSubmit }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>SignUp</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CompsFormsAuthSignUp
          handleSubmit={handleSubmit}
          initialValues={{
            email: '',
            password: '',
            passwordConfirmation: ''
          }}
        />
      </Modal.Body>
    </Modal>
  )
}
