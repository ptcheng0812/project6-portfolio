import Modal from 'react-bootstrap/Modal'

export default function CompsModalsImmediateHelp({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title />
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column">
          <div>If you are feeling extremely distressed or having suicidal thoughts: There are a number of helplines you can phone at any time to reach trained volunteers who want to help you to get the support you need.</div>
          <br></br>
          <br></br>
          <table class="table table-hover">
            <tbody>
              <tr>
                <th scope="row"></th>
                <td>24-hour suicide prevention hotline and emotional support</td>
                <td>2896 0000</td>
                <td>Cantonese, English, French, German, Hindi, Malay, Mandarin, Panjabi, Spanish, Tagalog and Urdu</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>Provide 24-hour information enquiries, and emotional support during office hours</td>
                <td>23432255 </td>
                <td>Cantonese, English</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td>24-hour family crisis hotline answered by social workers</td>
                <td>18288  </td>
                <td>Cantonese</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td >Ambulance Service</td>
                <td>999</td>
                <td>All languages</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal.Body>
    </Modal>
  )
}
