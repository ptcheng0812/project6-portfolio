import Modal from 'react-bootstrap/Modal'

import CompsFormsMyTasks from '@/components/forms/my-tasks/change'

export default function CompsModalsTasksUpdate({ show, initialValues, handleClose, handleSubmit }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CompsFormsMyTasks
          handleSubmit={handleSubmit}
          initialValues={initialValues}
        />
      </Modal.Body>
    </Modal>
  )
}
