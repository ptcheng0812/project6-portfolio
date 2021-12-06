import Modal from 'react-bootstrap/Modal'

export default function CompsModalsMyThreadsDelete({ show, handleClose, handleDelete }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title />
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center"><span>Do you want to delete this thread?</span></div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-danger btn-sm w-25 m-4"
              type="button"
              onClick={handleDelete}
            ><i className="fas fa-trash" />  Yes</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
