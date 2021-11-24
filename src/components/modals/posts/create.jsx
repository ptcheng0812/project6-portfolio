import Modal from 'react-bootstrap/Modal'

import CompsFormsPostsChange from '@/components/forms/posts/change'

export default function CompsModalsPostsCreate({ show, handleClose, handleSubmit }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create A New Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CompsFormsPostsChange
          handleSubmit={handleSubmit}
          initialValues={{
            content: ''
          }}
        />
      </Modal.Body>
    </Modal>
  )
}
