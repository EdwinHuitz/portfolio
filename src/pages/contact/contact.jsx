import React, {useState} from 'react'
import './contact.css'
import axios from 'axios'

export default function Contact(){
   const [formI,setFormI]=useState({name:'',email:'',subject:'',message:''})
   const [eMail,setEmail]=useState(false)
   const [msg,setMsg]=useState(0)
   
   function updateValues(e){
      setMsg(0)
      setFormI({...formI,[e.target.name]:e.target.value})
   }
   //submits the email if all of the fields do not return null
   function validateForm(e){
      setMsg(1)
      if(formI.name && formI.email && formI.subject && formI.message){
         axios.post('https://6xiseb1eui.execute-api.us-east-1.amazonaws.com/dev/services/mail',{mail:[formI.name,formI.email,formI.subject,formI.message]})
         .then(e=>setMsg(2))
         .catch(e=>setMsg(3))
      }
      e.preventDefault()
   }
   //checks that the email address entered is valid
   function validateEmail(){
      if((formI.email.length>0 && !formI.email.match(/[@]/) && !formI.email.match(/[.]/)) || 
      (!formI.email.match(/[@]/) && formI.email.match(/[.]/)) || 
      (!formI.email.match(/[.]/) && formI.email.match(/[@]/)) || 
      !formI.email.match(/[a-zA-Z]$/g))
      {setEmail(false)} else {setEmail(true)}
   }
   return(
      <div id="contact" className="contact container">
         <div className="row align-items-start offset-md-1">
            <div className="section-title col align-self-center" title="Contact Me">
               <h2>Contact Me</h2>
               <p>I am located in the Chicago, Illinois area and am willing to travel and/or relocate if necessary. For all inquiries I can be reached via phone or email, but you may also reach me seamlessly by using the form below.</p>
            </div>
         </div>
         <div className="row align-items-end offset-md-1">
            <div id="location_box" className="col">
               <div className="info">
                  <div className="infoDetail">
                     <i className="bx bx-map"></i>
                     <h5>Washington, DC</h5>
                  </div>
                  <div className="infoDetail">
                     <i className="bx bx-phone"></i>
                     <h5>(<span className="hiddenPhone">01</span><span>2</span><span className="hiddenPhone">01</span><span>4</span><span className="hiddenPhone">02</span><span>0</span><span className="hiddenPhone">03</span>) - <span>7</span><span className="hiddenPhone">05</span><span>2</span><span className="hiddenPhone">08</span><span>2</span><span className="hiddenPhone">13</span> - <span>8</span><span className="hiddenPhone">21</span><span>7</span><span className="hiddenPhone">34</span><span>7</span><span className="hiddenPhone">55</span><span>1</span><span className="hiddenPhone">89</span></h5>
                  </div>
                  <iframe title="Map" src="https://maps.google.com/maps?hl=en&amp;q=%20chicago+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{border:"0", borderRadius:"15px", width: "100%", height: "30vh",marginTop:"10%"}} allowFullScreen></iframe>
               </div>
            </div>
            <div id="contact_box" className="col">
               <form id ="contact_form" onSubmit={validateForm} className="row email-form">
                  <div id="msg_sender_info" className="row">
{/* name */}
                     <div id="msg_name" className="col">
                        <input type="text" name="name" title="Name" className={formI.name.length===0?"form-control":formI.name.length>=2?"form-control is-valid":"form-control is-invalid"} id="name" placeholder='Your Name' onChange={(e)=>updateValues(e)} required />
                        <div className="invalid-feedback">{(formI.name.length>0 && formI.name.length<2)?<b>Please enter a valid name</b>:''}</div>
                     </div>
{/* email */}
                     <div id="msg_email" className="col">
                        <input type="text" className={formI.email.length===0?"form-control":!eMail?"form-control is-invalid":"form-control is-valid"} name="email" title="E-Mail Address" id="email" value={formI.email} placeholder="Your E-Mail Address" onChange={(e)=>{updateValues(e);validateEmail()}} required />
                        <div className="invalid-feedback">
                           {formI.email.length>0 && !eMail?<b>Please enter a valid email address</b>:''}
                        </div>
                     </div>
                  </div>
{/* subject */}
                  <div id="msg_subject" className="row">
                     <input type="text" className={formI.subject.length===0?"form-control":formI.subject.length>=5?"form-control is-valid":"form-control is-invalid"} name="subject" title="Subject" id="subject" value={formI.subject} placeholder="Subject" onChange={(e)=>updateValues(e)} required />
                     <div className="invalid-feedback">{(formI.subject.length>0 && formI.subject.length<5)?<b>Please enter a subject with a minimum of 5 characters</b>:''}</div>
                  </div>
{/* message */}
                  <div id="msg_text" className="row">
                     <textarea className={formI.message.length===0?"form-control":formI.message.length>=10?"form-control is-valid":"form-control is-invalid"} name="message" title="Message" id="message" rows="10" value={formI.message} placeholder="Message" onChange={(e)=>updateValues(e)} required ></textarea>
                     <div className="invalid-feedback">{(formI.message.length>0 && formI.message.length<10)?<b>Please enter a message with a minimum of 10 characters</b>:''}</div>
                  </div>
{/* button */}
                  <div id="msg_button" className="row align-content-sm-center">
                     <button type="submit" title="Send Message" className={msg===0?"btn btn-primary":msg===1?"btn btn-secondary":msg===2?"btn btn-success":"btn btn-danger"} disabled={formI.name.length<2 || formI.email.length<6 || formI.subject.length<5 || formI.message.length<10 || msg!==0}>
                        {msg===0?<span style={{fontSize:'1.1em'}}>Send Message</span>:
                        msg===1?<><i className="refreshSpin bx bx-loader" style={{fontSize:'1.1em'}}></i><span style={{fontSize:'1.1em'}}> Sending...</span></>:
                        msg===2?<><i className="bx bx-check" style={{fontSize:'1.1em'}}></i><span style={{fontSize:'1.1em'}}> Success!</span></>:
                        <><i className="bx bx-error" style={{fontSize:'1.1em'}}></i><span style={{fontSize:'1.1em'}}> Error!</span></>}
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}