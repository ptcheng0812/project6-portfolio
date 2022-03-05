import Modal from 'react-bootstrap/Modal'

export default function CompsModalsWork({ show, handleClose }) {
  return (
    <Modal className="Modal" show={show} onHide={handleClose} fullscreen="xl-down" >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <div class="tm-mb-1" id="about">
            <div class="">
                <div class="tm-section-1-l">
                    <img id="first-image-work" src="https://i.imgur.com/TSHUMLi.png" alt="About image" class="tm-img-responsive"/>
                </div>
                <article class="tm-section-1-r tm-bg-color-8">
                    <h2 class="tm-mb-2 p-5 tm-title-color">Modern Design</h2>
                    <p> Luxury and modern wireframe design with dark grey navbar. Responsive card design with carousel of images. User profile show page for connecting clients and agents. Favouriting feature, inspired from eCommence shopping cart with temporary data storage.</p>
                    <a href="https://house812.herokuapp.com/" class="tm-btn tm-btn-1 tm-link-to-services ">Check website</a>
                </article>
            </div>
        </div>
        <div class="tm-bg-color-1 tm-mb-1 tm-row tm-social-row">
            <div class="tm-icon">
                <div class="tm-icon-inner">
                        <i class="fas fa-synagogue fa-4x tm-mb-1"></i>
                        <p class="tm-icon-inner-text">Luxury</p>
                </div>
            </div>
            <div class="tm-icon">
                <div class="tm-icon-inner">
                        <i class="fas fa-chart-bar fa-4x tm-mb-1"></i>
                        <p class="tm-icon-inner-text">UX based</p>
                </div>
            </div>
            <div class="tm-icon">
                <div class="tm-icon-inner">
                        <i class="fas fa-images fa-4x tm-mb-1"></i>
                        <p class="tm-icon-inner-text">Data Storage</p>
                </div>
            </div>
        </div>
        <div class="" id="services">
            <div class="tm-section-2-r">
                <img id="second-image-work" src="https://i.imgur.com/Cu63NiA.png" alt="Services image" class="tm-img-responsive"/>
            </div>
            <div class="tm-section-2-l">
                <article class="tm-bg-color-6 tm-box-pad tm-mb-1">
                    <h2 class="tm-mb-2">Modal Feature</h2>
                    <p>With authentication system, users can view and post new properties that can be specified as different types(rent or sell). All these can be finished inside a modal rather than traditional routing pages.</p>
                    <p class="tm-mb-0">Expanding user experience by providing clean cut design and understandable UI.</p>
                </article>
                <div class="tm-bg-color-7 tm-em-box">
                    <p class="tm-text-color-2">Link is down below</p>
                    <a href="#gallery" class="tm-btn tm-btn-2">Read More</a>
                </div>
            </div>
        </div>

      </Modal.Body>
    </Modal>
  )
}
