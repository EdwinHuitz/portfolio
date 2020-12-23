import React, {useState, useEffect} from 'react'
import Footer from '../components/footer'
import axios from 'axios'
function Portfolio(){
   useEffect(() => {
      let i=0
      let erase=false
      let letters = ''
      let pause,loop
      const langs=["HTML5", "Python", "React.js", "CSS3", "Django", "Node.js", "JavaScript"]
      loop = setInterval(async() => {
         if(erase===false){
            if(letters.length!==langs[i].length){
               letters+=langs[i][letters.length]
               setSkill(letters)
            }else{
               pause=true
               erase=true
            }
         }else if(erase===true){
            if(pause===true){setTimeout(()=>{pause=false},440)}
            else{
               if(letters.length>0){
                  letters=letters.slice(0,letters.length-1)
                  setSkill(letters)
               }
               else{
                  erase='done'
               }
            }
         }
         else{
            (i<langs.length-1)?i++:i=0
            setTimeout(()=>{letters='';erase=false},440)
         }
      }, 150)
      return () => {
         clearInterval(loop)
      }
   }, [])
   const [skill,setSkill]=useState('')
   const [formI,setFormI]=useState({name:'',email:'',subject:'',message:''})
   const [msg,setMsg]=useState(2)

   function updateValues(e){
      setMsg(0)
      setFormI({...formI,[e.target.name]:e.target.value})
   }
   function validateForm(e){
      setMsg(1)
      if(formI.name && formI.email && formI.subject && formI.message){
         axios.post('api/'+[formI.name,formI.email,formI.subject,formI.message])
         .catch(e=>setMsg(3))
         .then(e=>setMsg(2))
      }
      e.preventDefault()
   }
   return(
      <>
         <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
               <h1>Edwin Huitz </h1>
               <h3 style={{color:"white"}}><u>Full-Stack Developer</u></h3><br/>
               <p>{skill}<span className="cursor">|</span> Developer.</p>
            </div>
         </section>
         <main id="main">
            <section id="about" className="about">
               <div className="container">
                  <div className="section-title">
                     <h2>About</h2>
                     <p>My name is Edwin Huitz and I am a full-stack developer. I have spent over 480 hours total training in web development as part of a fellowship with the multinational corporation General Assembly. During this time I worked my way up to becoming a full-stack developer by spending hundreds of hours coding alongside teammates to build high quality websites, some of which can be seen below in my portfolio.</p>
                  </div>
               </div>
            </section>
            <section id="skills" className="about skills section-bg">
               <div className="container">
                  <div className="section-title">
                     <h2>Skills</h2>
                  </div>
               <div className="row">
                  <div className="col-lg-12 pt-4 pt-lg-0 content" data-aos="fade-left">
                     <h3>Full-Stack Web Developer</h3>
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
                  <div className="section-title">
                     <h2>Portfolio</h2>
                     <p>The items below are a select number of projects that I have worked with and/or built independently.</p>
                  </div>
                  <div className="row" data-aos="fade-up">
                     <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-react">React</li>
                        <li data-filter=".filter-javascript">Java-Script</li>
                        <li data-filter=".filter-django">Django</li>
                        <li data-filter=".filter-python">Python</li>
                        </ul>
                     </div>
                  </div>
                  <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                     <div className="col-lg-4 col-md-6 portfolio-item filter-javascript filter-react">
                        <div className="portfolio-wrap">
                           <img src="assets/img/portfolio/weather.png" className="img-fluid" alt=""/>
                           <div className="portfolio-links">
                              <a href="assets/img/portfolio/weather.png" data-gall="portfolioGallery" className="venobox" title="Daily Weather Forcast"><i className="bx bx-zoom-in"></i></a>
                              <a href="/weather" title="More Details"><i className="bx bx-link"></i></a>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 portfolio-item filter-javascript">
                        <div className="portfolio-wrap">
                           <img src="assets/img/portfolio/game.png" className="img-fluid" alt=""/>
                           <div className="portfolio-links">
                              <a href="assets/img/portfolio/game.png" data-gall="portfolioGallery" className="venobox" title="Arcade Game"><i className="bx bx-zoom-in"></i></a>
                              <a href="http://infinite-hunger.surge.sh/" target="_blank" rel="noreferrer" title="More Details"><i className="bx bx-link"></i></a>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 portfolio-item filter-django filter-python">
                        <div className="portfolio-wrap">
                           <img src="assets/img/portfolio/HAT.png" className="img-fluid" alt=""/>
                           <div className="portfolio-links">
                              <a href="assets/img/portfolio/HAT.png" data-gall="portfolioGallery" className="venobox" title="Honest Apartment Testimonies"><i className="bx bx-zoom-in"></i></a>
                              <a href="https://bigmacwithbacon.herokuapp.com/" target="_blank" rel="noreferrer" title="More Details"><i className="bx bx-link"></i></a>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 portfolio-item filter-python">
                        <div className="portfolio-wrap">
                           <img src="assets/img/portfolio/covid.png" className="img-fluid" alt=""/>
                           <div className="portfolio-links">
                              <a href="assets/img/portfolio/covid.png" data-gall="portfolioGallery" className="venobox" title="Covid-19 World-Wide Statistics"><i className="bx bx-zoom-in"></i></a>
                              <a href="https://github.com/EdwinHuitz/python-applets" target="_blank" rel="noreferrer" title="More Details"><i className="bx bx-link"></i></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section id="contact" className="contact">
               <div className="container">
                  <div className="section-title">
                     <h2>Contact</h2>
                     <p>I am located in the DMV area and am willing to travel and/or relocate if necessary. For all inquiries I can be reached via phone or email, but you may also reach me seamlessly by using the form below.</p>
                  </div>
                  <div className="row" data-aos="fade-in">

                     <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                        <div className="address">
                           <i className="icofont-google-map"></i>
                           <h4>Location:</h4>
                           <p>Washington, DC</p>
                        </div>
                        <div className="phone">
                           <i className="icofont-phone"></i>
                           <h4>Call:</h4>
                           <p>(<span className="hiddenphone">01</span><span>2</span><span className="hiddenphone">01</span><span>4</span><span className="hiddenphone">02</span><span>0</span><span className="hiddenphone">03</span>) - <span>7</span><span className="hiddenphone">05</span><span>2</span><span className="hiddenphone">08</span><span>2</span><span className="hiddenphone">13</span> - <span>8</span><span className="hiddenphone">21</span><span>7</span><span className="hiddenphone">34</span><span>7</span><span className="hiddenphone">55</span><span>1</span><span className="hiddenphone">89</span></p>
                        </div>
                        <iframe title="f" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d397483.9561786603!2d-77.29476234483174!3d38.893261661226475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xd6e28ec00254a198!2sDistrict%20of%20Columbia!5e0!3m2!1sen!2sus!4v1603425816092!5m2!1sen!2sus>" frameBorder="0" style={{border:"0", width: "100%", height: "290px"}} allowFullScreen></iframe>
                        </div>
                     </div>
                     <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form id ="contact-form" onSubmit={validateForm} className="email-form">
                        <div className="form-row">
                           <div className="form-group col-md-6">
                              <label htmlFor="name">Your Name</label>
                              <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter a name consisting of at least 4 characters" onChange={(e)=>updateValues(e)} />
                              <div className="validate"></div>
                           </div>
                           <div className="form-group col-md-6">
                              <label htmlFor="name">Your Email</label>
                              <input type="text" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email address" value={formI.email} onChange={(e)=>updateValues(e)} />
                              <div className="validate"></div>
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="name">Subject</label>
                           <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter a subject consisting of at least 4 characters" value={formI.subject} onChange={(e)=>updateValues(e)} />
                           <div className="validate"></div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="name">Message</label>
                           <textarea className="form-control" name="message" id="message" rows="10" data-rule="required" data-msg="Please write a message" value={formI.message} onChange={(e)=>updateValues(e)} ></textarea>
                           <div className="validate"></div>
                        </div>
                        <div>
                           <div id="status"></div>
                        </div>
                        <div className="text-center"><button type="submit">{msg===0?<span style={{fontSize:'1.1em'}}>Send Message</span>:msg===1?<><i className="refreshSpin bx bx-loader" style={{fontSize:'1.1em'}}></i><span style={{fontSize:'1.1em'}}> Loading...</span></>:msg===2?<i className="bx bx-check" style={{fontSize:'1.1em'}}> Success!</i>:<i className="bx bx-error" style={{fontSize:'1.1em'}}> Error!</i>}</button></div>
                        </form>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <Footer color={['white','black']} />
      </>
   )
}
export default Portfolio;