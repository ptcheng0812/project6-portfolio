import Modal from 'react-bootstrap/Modal'

import CompsFormsMyTasks from '@/components/forms/my-tasks/change'

export default function CompsModalsTasksCreate({ show, handleClose, handleSubmit }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create A New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CompsFormsMyTasks
          handleSubmit={handleSubmit}
          initialValues={{
            duty: ''
          }}
        />
      </Modal.Body>
    </Modal>
  )
}
