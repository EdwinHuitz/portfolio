import { useState } from 'react'
import Handicap from '../plugins/handicap_icon'
import './navbar.css'

export default function Nav(){
   const [fonts,setFonts]=useState(0)
   function changeFonts(){
      let doc=document.body.style
      if(fonts===0){
         setFonts(1)
         doc.fontFamily="dyslexia"
      }else{
         setFonts(0)
         doc.fontFamily="Open Sans,sans-serif"
      }
   }

   let hash= window.location.hash
   let tags=['#home','#portfolio','#game','#weather','#todo','#menu','#shopping','#contact']
   return(
      <>
         <button className="mobile-nav-toggle" title="Open Navigation Menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft" aria-label="Toggle navigation" >
            <i className="bx bx-menu"></i>
         </button>

         <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasLeft" aria-labelledby="offCanvasLabel" style={{backgroundColor:hash===tags[1]?"#0F052E":hash===tags[3]?"#232f3e":hash===tags[4]?"#0B1828":hash===tags[5]?"#232f3e":"#040b14"}}>
            <div className="w-100 p-3 d-flex justify-content-end offcanvas-header">
               <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{backgroundColor:"white"}}></button>
            </div>
            <div className="offcanvas-body">
                  <div className="d-flex flex-column">
                     <nav className="nav-menu">
                        <ul>
                           <li className="active" style={{paddingBottom:"5vh"}}><a href={"assets/files/Edwin_Huitz_Resume_"+new Date().getFullYear()+".pdf"} rel="noreferrer"><i className="bx bx-file"></i> <span>Resume</span></a><br/></li>
                           <li className={hash===tags[0]?"active":""}>
                              <a href="/#home" ><i className="bx bx-home"></i> <span>Home</span></a>
                           </li>
                           <li className={hash===tags[1]?"active":""}>
                              <a href="/#portfolio" ><i className="bx bx-book-content"></i> Portfolio</a>
                           </li>
                           <li className={hash===tags[2]?"active":""}>
                              <a href="http://infinite-hunger.surge.sh/" target="_blank" rel="noreferrer" ><i className="bx bx-game"></i>Arcade Game</a></li>
                              <li className={hash===tags[3]?"active":""}>
                              <a href="/#weather" ><i className="bx bx-cloud-lightning"></i> Weather</a>
                           </li>
                           <li className={hash===tags[4]?"active":""}>
                              <a href="/#todo" ><i className="bx bx-list-ul"></i>To-Do List</a>
                           </li>
                           <li className={hash===tags[5]?"active":""}>
                              <a href="/#menu" ><i className="bx bx-food-menu"></i>Diner Menu</a>
                           </li>
                           <li className={hash===tags[6]?"active":""}>
                              <a href="/#shopping" ><i className="bx bx-cart"></i> Shopping Page</a>
                           </li>
                           <li className={hash===tags[7]?"active":""}>
                              <a href="/#contact" ><i className="bx bx-envelope"></i> Contact</a>
                           </li>
                        </ul>
                     </nav>
                  </div>
                  <span title={(fonts===0)?"Dyslexia Friendly Font":"Standard Font"} onClick={changeFonts}>
                  <Handicap />
                  </span>
            </div>
         </div>
      </>
   )
}