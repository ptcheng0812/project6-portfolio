import Modal from 'react-bootstrap/Modal'

export default function CompsModalsWorkSecond({ show, handleClose }) {
  return (
    <Modal className="Modal" show={show} onHide={handleClose} fullscreen="xl-down" >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <div class="tm-mb-1" id="about">
            <div class="">
                <div class="tm-section-1-l">
                    <img id="first-image-work" src="https://i.imgur.com/02EBrv8.png" alt="About image" class="tm-img-responsive"/>
                </div>
                <article class="tm-section-1-r tm-bg-color-8">
                    <h2 class="tm-mb-2 p-5 tm-title-color">Blog and Post Layout and System</h2>
                    <p> Instead of traditional Reddit type of layout of forums, this website used a more aesthetic and soothing element to present the calmness of the theme. By accessing post or creating new posts, clients are able to make threads inside a post. It requires complex server controlling and API routes, based on querying for models in database.</p>
                    <a href="https://touch-mental-health-forum.herokuapp.com/categories" class="tm-btn tm-btn-1 tm-link-to-services ">Check website</a>
                </article>
            </div>
        </div>
        <div class="tm-bg-color-1 tm-mb-1 tm-row tm-social-row">
            <div class="tm-icon">
                <div class="tm-icon-inner">
                        <i class="fas fa-synagogue fa-4x tm-mb-1"></i>
                        <p class="tm-icon-inner-text">Query</p>
                </div>
            </div>
            <div class="tm-icon">
                <div class="tm-icon-inner">
                        <i class="fas fa-chart-bar fa-4x tm-mb-1"></i>
                        <p class="tm-icon-inner-text">Aesthetic</p>
                </div>
            </div>
            <div class="tm-icon">
                <div class="tm-icon-inner">
                        <i class="fas fa-images fa-4x tm-mb-1"></i>
                        <p class="tm-icon-inner-text">Server</p>
                </div>
            </div>
        </div>
        <div class="" id="services">
            <div class="tm-section-2-r">
                <img id="second-image-work" src="https://i.imgur.com/fHNpjwE.png" alt="Services image" class="tm-img-responsive"/>
            </div>
            <div class="tm-section-2-l">
                <article class="tm-bg-color-6 tm-box-pad tm-mb-1">
                    <h2 class="tm-mb-2">User Friendly Responsive</h2>
                    <p>Very Responsive Bootstrap design. Clients can use the website in iPhone, iPad and PC. </p>
                </article>
                <div class="tm-section-1-l">
                    <img id="first-image-work" src="https://i.imgur.com/3jkIt8j.png" alt="About image" class="tm-img-responsive"/>
                </div>
                <div class="tm-bg-color-1 tm-mb-1 tm-row tm-social-row">
                  <p class="tm-icon-inner-text">Chat System</p>
                </div>
                <article class="tm-section-1-r tm-bg-color-8">
                    <h2 class="tm-mb-2 tm-title-color">Websocket</h2>
                    <p> Websocket is acting like a waveband in a radio. Clients log in the real time chat system anonymously and chat whatever they want. This feature defined the idea of the website which is "connection" and "touch".</p>
                    <a href="https://touch-mental-health-forum.herokuapp.com/categories" class="tm-btn tm-btn-1 tm-link-to-services mt-5">Check website</a>
                </article>
                <div class="tm-bg-color-7 tm-em-box">
                    <p class="tm-text-color-2">Link is down below</p>
                    <a href="https://touch-mental-health-forum.herokuapp.com/categories" class="tm-btn tm-btn-2">Read More</a>
                </div>
            </div>
        </div>

      </Modal.Body>
    </Modal>
  )
}
