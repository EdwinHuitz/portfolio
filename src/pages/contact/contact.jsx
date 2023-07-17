import { Amplify } from 'aws-amplify';
import { ContactFormCreateForm } from '../../ui-components';
import awsconfig from '../../aws-exports';
import "@aws-amplify/ui-react/styles.css";
import './contact.css'
Amplify.configure(awsconfig);

export default function Contact(){
   return(
      <div id="contact" className="contact container">
         <div className="row align-items-start offset-md-1">
            <div className="section-title col align-self-center" title="Contact Me">
               <h2>Contact Me</h2>
               <p>I am currently located in the Chicago, Illinois area and I'm willing to travel and/or relocate if necessary. For all inquiries I can be reached via phone or email, but you may also reach me seamlessly by using the form below.</p>
            </div>
         </div>
         <div className="row align-items-end offset-md-1">
            <div id="location_box" className="col">
               <div className="info">
                  <div className="infoDetail d-flex align-items-center">
                     <i className="bx bx-map"></i>
                     <h5 style={{marginLeft:"1em"}}>Chicago, Illinois</h5>
                  </div>
                  <div className="infoDetail d-flex align-items-center">
                     <i className="bx bx-phone"></i>
                     <h5 style={{marginLeft:"1em"}}>(<span className="hiddenPhone">01</span><span>2</span><span className="hiddenPhone">01</span><span>4</span><span className="hiddenPhone">02</span><span>0</span><span className="hiddenPhone">03</span>) - <span>7</span><span className="hiddenPhone">05</span><span>2</span><span className="hiddenPhone">08</span><span>2</span><span className="hiddenPhone">13</span> - <span>8</span><span className="hiddenPhone">21</span><span>7</span><span className="hiddenPhone">34</span><span>7</span><span className="hiddenPhone">55</span><span>1</span><span className="hiddenPhone">89</span></h5>
                  </div>
                  <iframe title="Map" src="https://maps.google.com/maps?hl=en&amp;q=%20chicago+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{display:window.innerWidth>990?"block":"none",border:"0", borderRadius:"15px", width: "100%", height: "30vh",marginTop:"10%"}} allowFullScreen></iframe>
               </div>
            </div>
            <div id="contact_box" className="col emailBox">
               <ContactFormCreateForm />
            </div>
         </div>
      </div>
   )
}