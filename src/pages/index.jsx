import { useState } from 'react'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import CompsLayoutsNavbar from '@/components/layouts/Navbar'
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { WrapItem, Wrap } from '@chakra-ui/react'

import CompsModalsWork from '@/components/modals/work/work'
import CompsModalsWorkSecond from '@/components/modals/work/work2'
import CompsModalsWorkThird from '@/components/modals/work/work3'

export default function PagesHome() {
  const [openWork, setOpenWork] = useState(false)
  const [openWorkSecond, setOpenWorkSecond] = useState(false)
  const [openWorkThird, setOpenWorkThird] = useState(false)

  return (
    <>
      <div id="pages-home">
	      <div class="boxed-page">
          <div class="jumbotron d-flex align-items-center" style={{}} id="top-contain-home">
          <div class="container text-center" >
            <Avatar className="mb-5" size='3xl' name='Peter Cheng' showBorder="false" src='https://media-exp1.licdn.com/dms/image/C5603AQEHTyIK1C9bQQ/profile-displayphoto-shrink_200_200/0/1614238199332?e=1651708800&v=beta&t=ykztdsBskmjOXa3xzudFooD6Aeb9ksoh-nGSVYnmuTk' />{' '}
            <h1 class="display-2 mb-4">Peter Cheng</h1>
            <p>Web Developer | Frontend Developer
            </p>
            <br></br>
            <br></br>
            <br></br>
            <p>Email: ptcheng0812@outlook.com
            </p>
            <p>Mobile: +44 7479817881 / +852 97266513
            </p>
            <p>Location: London, UK
            </p>
          </div>
          </div>
          <section id="gtco-who-we-are" class="bg-white">

    <div class="container">
        <div class="section-content">
            <div class="title-wrap">
                <h2 class="section-title">Portfolio Website</h2>
                <p class="section-sub-title">Being an avid learner, and enjoying problem solving, I have immersed myself in the world of coding. My goals are to continuously learn, solve problems and add value to my team and company. Pursuing my career in the UK is my dream.</p>
            </div>

            <div class="row text-center">
                <div class="col-md-4 col-sm-6 ">
                    <div className="d-flex justify-content-center">
                      <img class="rounded-circle mb-5" src="https://www.lbmsllc.com/wp-content/uploads/2018/06/web-development-skills-1024x582.jpg" alt="Generic placeholder image" width="140" height="140"/>
                    </div>
                    <h5 class="mb-4">Learn Fast</h5>
                    <p>Love new techs and able to pick up any new frameworks and libraries</p>
                </div>
                <div class="col-md-4 col-sm-6 ">
                    <div className="d-flex justify-content-center">
                      <img class="rounded-circle mb-5" src="https://www.lbmsllc.com/wp-content/uploads/2018/06/web-development-skills-1024x582.jpg" alt="Generic placeholder image" width="140" height="140"/>
                    </div>
                    <h5 class="mb-4">Word Hard and Love Fast Pace</h5>
                    <p>I am passionate about Full Stack web development and this quick and busy industry</p>
                </div>
                <div class="col-md-4 col-sm-6 ">
                    <div className="d-flex justify-content-center">
                      <img class="rounded-circle mb-5" src="https://www.lbmsllc.com/wp-content/uploads/2018/06/web-development-skills-1024x582.jpg" alt="Generic placeholder image" width="140" height="140"/>
                    </div>
                    <h5 class="mb-4">Collaborate With Others</h5>
                    <p>I love having collaborations so I would have more learning and tackle challenges. </p>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="gtco-counter" class="overlay bg-fixed">
    <div class="container">
        <div class="section-content">
            <div class="row">

                <div class="col-md-3 col-sm-6 counter-item">
                    <i class="lnr lnr-users"></i>
                    <span class="number" data-from="0" data-to="34" data-refresh-interval="100">1</span>
                    <h4>Years Experience</h4>
                </div>

                <div class="col-md-3 col-sm-6 counter-item">
                    <i class="lnr lnr-briefcase"></i>
                    <span class="number" data-from="0" data-to="32" data-refresh-interval="100">7</span>
                    <h4>Projects Done</h4>
                </div>
                <div class="col-md-3 col-sm-6 counter-item">
                    <i class="lnr lnr-heart"></i>
                    <span class="number" data-from="0" data-to="38" data-refresh-interval="100">20+</span>
                    <h4>Skills</h4>
                </div>
                <div class="col-md-3 col-sm-6 counter-item">
                    <i class="lnr lnr-rocket"></i>
                    <span class="number" data-from="0" data-to="29" data-refresh-interval="100">5</span>
                    <h4>Websites Launch</h4>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="gtco-features" class="bg-white">
    <div class="container">
        <div class="section-content">
            <div class="title-wrap">
                <p class="section-title">
                    All the  <span><b>skills</b> </span>I <span>know  so  far</span>
                </p>
            </div>
            <div class="row">
                <div class="col-md-12 features-holder">
                    <div class="row">
                        <div class="col-md-4 col-sm-6 feature-item item mb-3 mb-3 text-center">
                            <div class="my-4">
                                <i class="lnr lnr-cog fs-40"></i>
                            </div>
                            <h4>The Basic</h4>
                            <ul>
                              <div>HTML</div>
                              <div>JAvascript</div>
                              <div>CSS</div>
                            </ul>
                        </div>
                        <div class="col-md-4 col-sm-6 feature-item item mb-3 text-center">
                            <div class="my-4">
                                <i class="lnr lnr-frame-contract fs-40"></i>
                            </div>
                            <h4>Frameworks</h4>
                            <ul>
                              <div>jQuery</div>
                              <div>React</div>
                              <div>Nextjs</div>
                              <div>React Native</div>
                            </ul>
                        </div>
                        <div class="col-md-4 col-sm-6 feature-item item mb-3 text-center">
                            <div class="my-4">
                                <i class="lnr lnr-bubble fs-40"></i>
                            </div>
                            <h4>Version Control</h4>
                            <ul>
                              <div>Git</div>
                              <div>GitHub</div>
                              <div>Jira</div>
                              <div>Visual Studio</div>
                            </ul>
                        </div>
                        <div class="col-md-4 col-sm-6 feature-item item mb-3 text-center">
                            <div class="my-4">
                                <i class="lnr lnr-magic-wand fs-40"></i>
                            </div>
                            <h4>Backend</h4>
                            <ul>
                              <div>Nodejs</div>
                              <div>Express</div>
                              <div>Sequelize</div>
                              <div>Firebase</div>
                            </ul>
                        </div>
                        <div class="col-md-4 col-sm-6 feature-item item mb-3 text-center">
                            <div class="my-4">
                                <i class="lnr lnr-clock fs-40"></i>
                            </div>
                            <h4>CSS libraries</h4>
                            <ul>
                              <div>Bootstrap</div>
                              <div>Charkra UI</div>
                              <div>Material UI</div>
                              <div>Tailwind</div>
                            </ul>
                        </div>
                        <div class="col-md-4 col-sm-6 feature-item item mb-3 text-center">
                            <div class="my-4">
                                <i class="lnr lnr-thumbs-up fs-40"></i>
                            </div>
                            <h4>Others</h4>
                            <ul>
                              <div>PHP</div>
                              <div>C#</div>
                              <div>Unity</div>
                              <div>.Net 5</div>
                              <div>Selenium</div>
                              <div>Postman</div>
                              <div>Figma</div>
                              <div>Adobe XD</div>
                              <div>Adobe AI</div>
                              <div>Wordpress</div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="gtco-section-featurettes" class="featurettes bg-white">

    <div class="container">
        <div class="section-content">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="title-wrap">
                        <h2 class="section-title">
                            <b>3 new</b> works' demonstrations
                        </h2>
                        <p class="section-sub-title">
                            Consulted client (simulated) to supervise full-stack web development with Sequelize API to build a platform for B2C clients to search listing, while agent can input data. Used Jira to plan ahead API building/ improvement work, e.g. using JavaScript, HTML to build interface, back-end association for data calling, by listing milestone, task. Project pipeline shortened by 20%.
                        </p>
                    </div>
                    <div class="featurettes-wrap text-left mb-4">

                        <div class="row featurettes-item">

                            <div class="col-md-4 offset-md-2 col-sm-6">
                                <div class="my-5">
                                    <span class="lnr lnr-camera fs-40 color-primary"></span>
                                </div>
                                <h4 class="mb-4">Property Website</h4>
                                <p>Consulted client (simulated) to supervise full-stack web development with Sequelize API to build a platform for B2C clients to search listing, while agent can input data, based on PERN stack. Used Jira and Trello to plan ahead API building/ improvement work, e.g. using JavaScript, HTML to build interface, back-end association for data calling, by listing milestone, task. Project pipeline shortened by 20%.</p>
                            </div>

                            <div class="col-md-4 offset-md-right-2 col-sm-6">
                                <img class="my-5" src="img/app-profile-mockup.png" alt=""/>
                            </div>

                        </div>

                    </div>

                    <div class="featurettes-wrap text-left">

                        <div class="row featurettes-item">

                            <div class="col-md-4 offset-md-2 col-sm-6">
                                <img class="my-4" src="img/app-chat-mockup.png" alt=""/>
                            </div>

                            <div class="col-md-4 offset-md-right-2 col-sm-6 mb-5">
                                <div class="my-4">
                                    <span class="lnr lnr-bubble fs-40 color-primary"></span>
                                </div>
                                <h4 class="mb-4">Mental Health Forum</h4>
                                <p>A RESTful API app used Axios to send XMLHttpRequest and Nextjs for main app. Applied SEO technique into HTML scripting to boost online traffic. Proactively conducted customer journey map, Google Trend research, to identify optimised keywords and copywriting, before implementing keywords into html script writing. SEO performance enhanced by 20% (projected).
</p>
                            </div>

                        </div>

                    </div>

                    <div class="featurettes-wrap text-left">

                        <div class="row featurettes-item">

                            <div class="col-md-4 offset-md-2 col-sm-6 offset-sm-0">
                                <h4 class="mb-4">A Simple Scheduling App</h4>
                                <p>Developed responsive mobile and web platform. Applied CRUD concept into storage mechanism. Manipulating Nodejs for backend server. An application with scheduling date and task in a B2B platform to increase efficiency.</p>
                            </div>

                            <div class="col-md-4 offset-md-right-2 col-sm-6 text-center">
                                <a href="#0"><img class="btn-img my-4" src="img/appstore-btn.png" alt=""/></a>
                                <a href="#0"><img class="btn-img" src="img/playstore-btn.png" alt=""/></a>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    </div>

</section>
<section id="gtco-blog" class="bg-grey">
    <div class="container">
        <div class="section-content">
            <div class="title-wrap mb-5">
                <h2 class="section-title">Demo <b>Showcase</b></h2>
                <p class="section-sub-title">Click the name to view </p>
            </div>
            <div class="row">

                <div class="col-md-12 blog-holder">
                    <div class="row">

                        <div class="col-md-4 blog-item-wrapper">
                            <div class="blog-item">
                                <div class="blog-img">
                                    <img src="https://i.imgur.com/31hRMIN_d.webp?maxwidth=760&fidelity=grand" alt="property"/>
                                </div>
                                <div class="blog-text">
                                    <div class="blog-tag">
                                        <a href="#"><h8><small>Property Website</small></h8></a>
                                    </div>
                                    <div class="blog-title">
                                        <a onClick={() => setOpenWork(true)}><h4>House812</h4></a>
                                    </div>
                                    <div class="blog-meta">
                                        <p class="blog-date">Sept 2021</p> /
                                    </div>
                                    <div class="blog-desc">
                                        <a href="https://house812.herokuapp.com/">
                                            <p>https://house812.herokuapp.com/</p>
                                        </a>
                                    </div>
                                    <div class="blog-author">
                                        <p>by Peter Cheng</p>
                                    </div>
                                    <div class="blog-share-wrapper">
                                        <a class="blog-share" href="google.com">
                                            <i class="fab fa-facebook-square"></i>
                                        </a>
                                        <a class="blog-share" href="google.com">
                                            <i class="fab fa-twitter-square"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 blog-item-wrapper">
                            <div class="blog-item">
                                <div class="blog-img">
                                    <a href="#"><img src="https://i.imgur.com/lnCFu9c.png" alt=""/></a>
                                </div>
                                <div class="blog-text">
                                    <div class="blog-tag">
                                        <a href="#"><h8><small>Online Mental Health Forum</small></h8></a>
                                    </div>
                                    <div class="blog-title">
                                        <a onClick={() => setOpenWorkSecond(true)}><h4>Touch</h4></a>
                                    </div>
                                    <div class="blog-meta">
                                        <p class="blog-date">Nov 2021</p> /
                                    </div>
                                    <div class="blog-desc">
                                        <a href="https://touch-mental-health-forum.herokuapp.com/categories"><p>https://touch-mental-health-forum.herokuapp.com/categories</p></a>
                                    </div>
                                    <div class="blog-author">
                                        <p>by Peter Cheng</p>
                                    </div>
                                    <div class="blog-share-wrapper">
                                        <a class="blog-share" href="google.com">
                                            <i class="fab fa-facebook-square"></i>
                                        </a>
                                        <a class="blog-share" href="google.com">
                                            <i class="fab fa-twitter-square"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 blog-item-wrapper">
                            <div class="blog-item">
                                <div class="blog-img">
                                    <a href="#"><img src="https://i.imgur.com/ayt8PXt.png" alt=""/></a>
                                </div>
                                <div class="blog-text">
                                    <div class="blog-tag">
                                        <a href="#"><h8><small>Scheduling Tool</small></h8></a>
                                    </div>
                                    <div class="blog-title">
                                        <a onClick={() => setOpenWorkThird(true)}><h4>MemoPicker</h4></a>
                                    </div>
                                    <div class="blog-meta">
                                        <p class="blog-date">Feb 2022</p> /
                                    </div>
                                    <div class="blog-desc">
                                        <a href="https://memopicker.herokuapp.com/"><p>https://memopicker.herokuapp.com/</p></a>
                                    </div>
                                    <div class="blog-author">
                                        <p>by John Doe</p>
                                    </div>
                                    <div class="blog-share-wrapper">
                                        <a class="blog-share" href="google.com">
                                            <i class="fab fa-facebook-square"></i>
                                        </a>
                                        <a class="blog-share" href="google.com">
                                            <i class="fab fa-twitter-square"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="gtco-portfolio" class="bg-white">
    <div class="container">
        <div class="section-content">
            <div class="title-wrap">
                <h2 class="section-title">My <b>Contact</b> Profile</h2>
                <p class="section-sub-title">Github and LinkedIn links are provided for more details and confirmation.</p>
            </div>

            <div class="row">

                <div class="col-md-12 portfolio-holder">
                    <div class="filter-button-group btn-filter d-flex justify-content-center">
                        <a href="https://github.com/ptcheng0812" tabindex="0" data-filter=".vintage">Github</a>
                        <a href="https://www.linkedin.com/in/peter-cheng-81a258170/" tabindex="0" data-filter=".creative">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="gtco-pricing" class="bg-grey">
    <div class="container">
        <div class="section-content">

            <div class="title-wrap">
                <h2 class="section-title">Education and Work Experience</h2>
                <p class="section-sub-title"><i>“Live as if you were to die tomorrow. Learn as if you were to live forever.” - Mahatma Gandhi</i></p>
            </div>

            <div class="card-deck mb-3 text-center">
                <div class="price-box card mb-4 box-shadow">
                    <div class="card-header p-4">
                        <h7 class="mb-0 text-orange font-weight-bold">H Academy</h7>
                        <h2 class="mt-2 mb-2">Full Time Full Stack Web Development Diploma</h2>
                        <p class="mb-0">August-Dec 2021</p>
                    </div>
                    <div class="card-body p-4">


                        <div class="container">
                            <ul class="list-group">
                                <li class="list-group-item clearfix mb-5">
                                <img class="img-responsive img-rounded" src="http://placehold.it/256/163a63" alt=""/>
                                <h3 class="list-group-item-heading">Syllabus</h3>
                                <p class="list-group-item-text lead" style={{ fontSize: "2rem" }}>Consists of lessons of HTML, CSS, JavaScript,  jQuery, React, Nextjs and Back-end related server setting skills on a full-time intensive learning basis</p>
                                </li>
                                <li class="list-group-item clearfix mb-5">
                                <img class="img-responsive img-rounded" src="http://placehold.it/256/163a63" alt=""/><h3 class="list-group-item-heading">Complex Major Projects</h3>
                                <p class="list-group-item-text lead" style={{ fontSize: "2rem" }}>Create 4 real-world RESTful API applications including Property websites, Affiliation websites, Online Forums and eCommence websites, etc</p>
                                </li>
                                <li class="list-group-item clearfix mb-5">
                                <img class="img-responsive img-rounded" src="http://placehold.it/256/163a63" alt=""/><h3 class="list-group-item-heading">Specialty</h3>
                                <p class="list-group-item-text lead" style={{ fontSize: "2rem" }}>Heavy training on data manipulation and data </p>
                                </li>
                                <li class="list-group-item clearfix mb-5"><img class="img-responsive img-rounded" src="http://placehold.it/256/163a63" alt=""/><h3 class="list-group-item-heading">Cloud</h3>
                                <p class="list-group-item-text lead" style={{ fontSize: "2rem" }}>Deep dive into multiple AWS services such as S3</p>
                                </li>
                                <li class="list-group-item clearfix mb-5"><img class="img-responsive img-rounded" src="http://placehold.it/256/163a63" alt=""/>
                                <h3 class="list-group-item-heading">Version Control</h3>
                                <p class="list-group-item-text lead" style={{ fontSize: "2rem" }}>Learn version control tools and CI/CD for app development</p>
                                </li>
                            </ul>
                        </div>
                        <a href="https://www.credential.net/4db675d3-8eed-467d-aa0c-b2ce5af4ed63#gs.rtxpbm" class="btn btn-block btn-secondary btn-orange mt-4">Check Certificate Credential</a>
                    </div>
                </div>
                <div class="price-box card mb-4 box-shadow">
                    <div class="card-header p-4">
                        <h7 class="text-cyan ">Prosper Education</h7>
                        <h2 class="mt-2 mb-2 font-weight-bold">Audio Programmer</h2>
                        <p class="mb-0">Nov 2018 - currently working</p>
                    </div>
                    <div class="card-body p-4">
                        <ul class="price-box-list list-unstyled mt-3 mb-4">
                            <p class="mt-5 mb-5" style={{ fontSize: "2rem" }}>Managed Audio Programming for 2 internal products – “RoyalABC World” (PC + Mobile) Game) and “RoyalABC Classroom” (mobile app), using C#, Unity engine, Fmod. Used Jira to plan and monitor entire project flow, from design, alert trigger, testing to production. Supervised audio testing using Visual Studio, Ulity to compile code. CX, responses enhanced by 15%.</p>
                            <p class="mt-5 mb-5" style={{ fontSize: "2rem" }}>Carried out test automations, and manual tests for bug fixing and feature-based improvement. Communicate with tech and art team to assure quality of outcome.</p>
                        </ul>
                        <a href="https://royalabc.com/gb/" class="btn btn-block btn-secondary btn-cyan mt-4">Check Company Website</a>
                    </div>
                </div>
                <div class="price-box card mb-4 box-shadow">
                    <div class="card-header p-4">
                        <h7 class="text-red font-weight-bold">SAE</h7>
                        <h2 class="mt-2 mb-2 font-weight-bold">Bachelor of Audio</h2>
                        <p class="mb-0">Sep 2016 - Jan 2019</p>
                    </div>
                    <div class="card-body p-4">
                        <ul class="price-box-list list-unstyled mt-3 mb-4">
                            <p class="mt-5 mb-5" style={{ fontSize: "2rem" }}>Studio And Post Production. Audio Programming.</p>
                            <p class="mt-5 mb-5" style={{ fontSize: "2rem" }}>Using UE and Wwise to implement Game Sound for assets and animations in projects.</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <section id="gtco-client" class="bg-white">
    <div class="container">
        <div class="section-content">

            <div class="title-wrap">
                <h2 class="section-title">
                    Who love to <b> work</b> with us
                </h2>
            </div>

            <div class="row ">
                <div class="col-md-2">

                    <div class="client-item">
                        <img class="img-responsive" src="img/client-1.png" alt=" "/>
                    </div>

                </div>
                <div class="col-md-2">

                    <div class="client-item">
                        <img class="img-responsive" src="img/client-2.png" alt=" "/>
                    </div>

                </div>
                <div class="col-md-2">

                    <div class="client-item">
                        <img class="img-responsive" src="img/client-3.png" alt=" "/>
                    </div>

                </div>
                <div class="col-md-2">

                    <div class="client-item">
                        <img class="img-responsive" src="img/client-4.png" alt=" "/>
                    </div>

                </div>
                <div class="col-md-2">

                    <div class="client-item">
                        <img class="img-responsive" src="img/client-5.png" alt=" "/>
                    </div>

                </div>
                <div class="col-md-2">

                    <div class="client-item">
                        <img class="img-responsive" src="img/client-6.png" alt=" "/>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section> */}
	<footer class="mastfoot mb-3 bg-white py-4 border-top">
    <div class="inner container">
        <div class="row">
         	<div class="col-md-6 d-flex align-items-center justify-content-md-start justify-content-center">
         	<p class="mb-0"> All Right Reserved. Design by <a  target="_blank">Peter Cheng</a>.</p>
         	</div>
        </div>
    </div>
</footer>
</div>
 </div>


      <CompsModalsWork
        show={openWork}
        handleClose={() => setOpenWork(false)}
      />

      <CompsModalsWorkSecond show={openWorkSecond}
        handleClose={() => setOpenWorkSecond(false)}
      />

      <CompsModalsWorkThird show={openWorkThird}
        handleClose={() => setOpenWorkThird(false)}
      />




</>


  )
}
