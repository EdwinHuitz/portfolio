import React from 'react'
import Home from './home/home'
import Weather from './weather/weather'
import Contact from './contact/contact'
import Footer from '../components/footer'

export default function Portfolio(props){

   let hash= window.location.hash
   let tags=['#home','#portfolio','#game','#weather','#contact']
   let bgColor="#040b14"
   hash===tags[4]?bgColor="#0B1828":
   bgColor="#040b14"
   document.body.style.backgroundColor=bgColor
   return(
      <>
         <main id="main">
            {hash===tags[0]?<Home/>:
            hash===tags[3]?<Weather/>:
            hash===tags[4]?<Contact/>:
            <Home/>}

            {/* <section id="about" className="about" title="About Me">
               <div className="container">
                  <div className="section-title">
                     <h2>About</h2>
                     <p>My name is Edwin Huitz and I am a full-stack developer. I have spent over 480 hours total training in web development as part of a fellowship with the multinational corporation General Assembly. During this time I worked my way up to becoming a full-stack developer by spending hundreds of hours coding alongside teammates to build high quality websites, some of which can be seen below in my portfolio.</p>
                  </div>
               </div>
            </section>
            <section id="skills" className="about skills section-bg">
               <div className="container">
                  <div className="section-title" title="My Skills">
                     <h2>Skills</h2>
                  </div>
               <div className="row">
                  <div className="col-lg-12 pt-4 pt-lg-0 content" data-aos="fade-left">
                     <p className="font-italic">
                     I am a full-stack Developer experienced in working with a consistantly growing number of languages including but not limited to the following:
                     </p>
                     <div className="row">
                     <div className="col-lg-4">
                        <ul>
                           <li><i className="icofont-rounded-right"></i> <strong>Python</strong></li>
                           <li><i className="icofont-rounded-right"></i> <strong>Django</strong></li>
                           <li><i className="icofont-rounded-right"></i> <strong>PostgreSQL</strong></li>
                        </ul>
                     </div>
                     <div className="col-lg-4">
                        <ul>
                           <li><i className="icofont-rounded-right"></i> <strong>React.js</strong></li>
                           <li><i className="icofont-rounded-right"></i> <strong>Node.js</strong></li>
                           <li><i className="icofont-rounded-right"></i> <strong>MongoDB</strong></li>
                        </ul>
                     </div>
                     <div className="col-lg-4">
                        <ul>
                           <li><i className="icofont-rounded-right"></i> <strong>HTML5</strong></li>
                           <li><i className="icofont-rounded-right"></i> <strong>CSS3</strong></li>
                           <li><i className="icofont-rounded-right"></i> <strong>JavaScript</strong></li>
                        </ul>
                     </div>
                     </div>
                  </div>
               </div>
               </div>
            </section>
            <section id="portfolio" className="portfolio section-bg">
               <div className="container">
                  <div className="section-title" title="My Portfolio">
                     <h2>Portfolio</h2>
                     <p>The items below are a select number of projects that I have worked with and/or built independently.</p>
                  </div>
                  <div className="row" data-aos="fade-up">
                     <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                        <li title="All" data-filter="*" className="filter-active">All</li>
                        <li title="React" data-filter=".filter-react">React</li>
                        <li title="Java-Script" data-filter=".filter-javascript">Java-Script</li>
                        <li title="Django" data-filter=".filter-django">Django</li>
                        <li title="Python" data-filter=".filter-python">Python</li>
                        </ul>
                     </div>
                  </div>
                  <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                     <div className="col-lg-4 col-md-6 portfolio-item filter-javascript filter-react">
                        <div className="portfolio-wrap" title="Daily Weather Forcast">
                           <img src="assets/img/portfolio/weather.png" className="img-fluid" alt="Daily Weather Forecast"/>
                           <div className="portfolio-links">
                              <a href="assets/img/portfolio/weather.png" data-gall="portfolioGallery" className="venobox" title="More Details"><i className="bx bx-zoom-in"></i></a>
                              <a href="/weather" title="View Project"><i className="bx bx-link"></i></a>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 portfolio-item filter-javascript">
                        <div className="portfolio-wrap" title="Arcade Game">
                           <img src="assets/img/portfolio/game.png" className="img-fluid" alt="Arcade Game"/>
                           <div className="portfolio-links">
                              <a href="assets/img/portfolio/game.png" data-gall="portfolioGallery" className="venobox" title="More Details"><i className="bx bx-zoom-in"></i></a>
                              <a href="http://infinite-hunger.surge.sh/" target="_blank" rel="noreferrer" title="View Project"><i className="bx bx-link"></i></a>
                              <a href="https://github.com/EdwinHuitz/arcade-game/" target="_blank" rel="noreferrer" title="View Source Code"><i className="bx bx-code-curly"></i></a>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 portfolio-item filter-django filter-python">
                        <div className="portfolio-wrap" title="Honest Apartment Testimonies">
                           <img src="assets/img/portfolio/HAT.png" className="img-fluid" alt="Honest Apartment Testimonies"/>
                           <div className="portfolio-links">
                              <a href="assets/img/portfolio/HAT.png" data-gall="portfolioGallery" className="venobox" title="More Details"><i className="bx bx-zoom-in"></i></a>
                              <a href="https://bigmacwithbacon.herokuapp.com/" target="_blank" rel="noreferrer" title="View Project"><i className="bx bx-link"></i></a>
                              <a href="https://github.com/EdwinHuitz/h-a-t/" target="_blank" rel="noreferrer" title="View Source Code"><i className="bx bx-code-curly"></i></a>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 portfolio-item filter-python">
                        <div className="portfolio-wrap" title="Covid-19 World-Wide Statistics">
                           <img src="assets/img/portfolio/covid.png" className="img-fluid" alt="Covid-19 World-Wide Statistics"/>
                           <div className="portfolio-links">
                              <a href="assets/img/portfolio/covid.png" data-gall="portfolioGallery" className="venobox" title="More Details"><i className="bx bx-zoom-in"></i></a>
                              <a href="https://github.com/EdwinHuitz/python-applets/" target="_blank" rel="noreferrer" title="View Source Code"><i className="bx bx-code-curly"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section> */}
         </main>
         <Footer color={[bgColor,'white']} />
      </>
   )
}