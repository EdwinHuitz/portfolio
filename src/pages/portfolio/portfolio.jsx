import React, {useState} from 'react'
import './portfolio.css'

export default function Portfolio(){
   //! needs more animations, links, and titles for zoomed in images
   const [bigPic,setPic] = useState(0)
   const pic = ["game","game","weather","HAT"]
   const descriptions = ["JavaScript based browser game","JavaScript based browser game","React.js weather app","Python Django based Apartments rating website"]
   function move(dir){
      if(dir===0){
         bigPic <= 1?setPic(pic.length-1):
         bigPic >1 && bigPic < pic.length?setPic(bigPic-1):
         setPic(1)
      }
      else if(dir===1){
         bigPic < pic.length-1?setPic(bigPic+1):
         bigPic >= pic.length-1?setPic(1):
         setPic(1)
      }
      console.log(bigPic)
   }
   return(
   <div id="portfolio_main" className="col">
      <div className="sample_list">
         <h2>Portfolio</h2><br/>
         <p>My name is Edwin Huitz and I am a full-stack developer. I have spent over 480 hours total training in web development as part of a fellowship with the multinational corporation General Assembly. During this time I worked my way up to becoming a full-stack developer by spending hundreds of hours coding alongside teammates to build high quality websites, some of which can be seen below in my portfolio.</p><br/>
         <hr /><br/>
         <p>The items below are a select number of projects that I have worked with and/or built independently.</p>
         <div className="row">
            {/* <div className="col-lg-12 d-flex justify-content-center">
               <table>
                  <tr>
                     <td >All</td>
                     <td className="median">|</td>
                     <td>React</td>
                     <td className="median">|</td>
                     <td>JavaScript</td>
                     <td className="median">|</td>
                     <td>Django</td>
                  </tr>
               </table>
            </div> */}
         </div><br/>
         <div className="projects d-flex justify-content-evenly">
            <div className="portfolio_item" title="Arcade Game">
               <img src="assets/img/portfolio/game.png" className="img-fluid" alt="Arcade Game"/>
               <div className="portfolio_links">
                  <button onClick={()=>setPic(1)} title="More Details"><i className="bx bx-zoom-in"></i></button>
                  <a href="https://infinite-hunger.surge.sh/" target="_blank" rel="noreferrer" title="View Project"><i className="bx bx-link"></i></a>
                  <a href="https://github.com/EdwinHuitz/arcade-game/" target="_blank" rel="noreferrer" title="View Source Code"><i className="bx bx-code-curly"></i></a>
               </div>
            </div>
            <div className="portfolio_item" title="Daily Weather Forcast">
               <img src="assets/img/portfolio/weather.png" className="img-fluid" alt="Daily Weather Forcast"/>
               <div className="portfolio_links">
                  <button onClick={()=>setPic(2)} title="More Details"><i className="bx bx-zoom-in"></i></button>
                  <a href="/#weather" target="_blank" rel="noreferrer" title="View Project"><i className="bx bx-link"></i></a>
                  <a href="https://github.com/EdwinHuitz/portfolio/src/pages/weather/" target="_blank" rel="noreferrer" title="View Source Code"><i className="bx bx-code-curly"></i></a>
               </div>
            </div>
            <div className="portfolio_item" title="Honest Apartment Testimonies">
               <img src="assets/img/portfolio/HAT.png" className="img-fluid" alt="Honest Apartment Testimonies"/>
               <div className="portfolio_links">
                  <button onClick={()=>setPic(3)} title="More Details"><i className="bx bx-zoom-in"></i></button>
                  <a href="https://bigmacwithbacon.herokuapp.com/" target="_blank" rel="noreferrer" title="View Project"><i className="bx bx-link"></i></a>
                  <a href="https://github.com/EdwinHuitz/h-a-t/" target="_blank" rel="noreferrer" title="View Source Code"><i className="bx bx-code-curly"></i></a>
               </div>
            </div>
         </div>
      </div>
      <div className={bigPic===0?"row hide":"row show"}>
         <span className="zoom-bg"></span>
         <img id="zoom-img" src={"assets/img/portfolio/"+pic[bigPic]+".png"} alt={descriptions[bigPic]} />
         <i id="left-chev" className="bx bx-chevron-left" onClick={()=>move(0)}></i>
         <i id="right-chev" className="bx bx-chevron-right" onClick={()=>move(1)}></i>
         <button id="exit-btn" onClick={()=>setPic(0)}>X</button>
      </div>
   </div>)
}