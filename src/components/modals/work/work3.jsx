import Modal from 'react-bootstrap/Modal'

export default function CompsModalsWorkThird({ show, handleClose }) {
  return (
    <Modal className="Modal" show={show} onHide={handleClose} fullscreen="xl-down" >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <div class="tm-mb-1" id="about">
            <div class="">
                <div class="tm-section-1-l">
                    <img id="first-image-work" src="https://i.imgur.com/f4WW4rc.png" alt="About image" class="tm-img-responsive"/>
                </div>
                <article class="tm-section-1-r tm-bg-color-8">
                    <h2 class="tm-mb-2 p-5 tm-title-color">Simple Calendar</h2>
                    <p> Scheduling tasks into daily basis. Applied React Canlander to date picking system. With authenticated users, they can mark and store dates' data. Authenticity token would bring up session cookies for users to print out corresponding data.</p>
                    <a href="https://memopicker.herokuapp.com/" class="tm-btn tm-btn-1 tm-link-to-services ">Check website</a>
                </article>
            </div>
        </div>
        <div class="tm-bg-color-1 tm-mb-1 tm-row tm-social-row">
            <div class="tm-icon">
                <div class="tm-icon-inner">
                        <i class="fas fa-synagogue fa-4x tm-mb-1"></i>
                        <p class="tm-icon-inner-text">Clean</p>
                </div>
            </div>
            <div class="tm-icon">
                <div class="tm-icon-inner">
                        <i class="fas fa-chart-bar fa-4x tm-mb-1"></i>
                        <p class="tm-icon-inner-text">Easy to Use</p>
                </div>
            </div>
            <div class="tm-icon">
                <div class="tm-icon-inner">
                        <i class="fas fa-images fa-4x tm-mb-1"></i>
                        <p class="tm-icon-inner-text">Authentication</p>
                </div>
            </div>
        </div>
        <div class="" id="services">
            <div class="tm-section-2-r">
                <img id="second-image-work" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200402205611/What-is-PERN-Stack.png" alt="Services image" class="tm-img-responsive"/>
            </div>
            <div class="tm-section-2-l">
                <article class="tm-bg-color-6 tm-box-pad tm-mb-1">
                    <h2 class="tm-mb-2">PERN</h2>
                    <p>PERN stack consists of PostgreSQL, Express, React and Node.js. Dates and tasks data are sent by request and store in database with associations, allowing more sufficient when data structure being presented.</p>
                    <p class="tm-mb-0">Providing real-time user experience in scheduling.</p>
                </article>
                <div class="tm-bg-color-7 tm-em-box">
                    <p class="tm-text-color-2">Link is down below</p>
                    <a href="https://memopicker.herokuapp.com/" class="tm-btn tm-btn-2">Read More</a>
                </div>
            </div>
        </div>

      </Modal.Body>
    </Modal>
  )
}
