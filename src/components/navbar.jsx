import React,{useState,useRef} from 'react'
import Handicap from '../plugins/handicap_icon'
import './navbar.css'

export default function Nav(){
   const [n,setN]=useState(0)
   const [fonts,setFonts]=useState(0)
   const header=useRef(null)

   function toggleMenu(){
      if(n===1){
         setN(0)
         header.current.style.left="-110vw";
      }
      else{
         setN(1)
         header.current.style.left="0vw";
      }
   }
   function changeFonts(){
      let doc=document.body.style
      if(fonts===0){
         setFonts(1)
         doc.fontFamily="dyslexia"
      }
      else{
         setFonts(0)
         doc.fontFamily="Open Sans,sans-serif"
      }
   }

   let hash= window.location.hash
   let tags=['#home','#portfolio','#game','#weather','#shopping','#contact']
   return(
      <>
         <button type="button" className="mobile-nav-toggle d-xl-none" title={(n===0)?"Open Navigation Menu":"Close Navigation Menu"} onClick={toggleMenu}>
            <i className="bx bx-menu"></i>
         </button>
         <header id="header" ref={header} style={{backgroundColor:hash===tags[1]?"#0F052E":hash===tags[5]?"#0B1828":"#040b14"}}>
            <div className="d-flex flex-column">
               <nav className="nav-menu">
                  <ul>
                     <li className="active" style={{paddingBottom:"10vh"}}><a href={"assets/files/Edwin_Huitz_Resume_"+new Date().getFullYear()+".pdf"} target="_blank" rel="noreferrer"><i className="bx bx-file"></i> <span>Resume</span></a><br/></li>
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
                        <a href="#shopping" ><i className="bx bx-cart"></i> Shopping Page</a>
                     </li>
                     <li className={hash===tags[5]?"active":""}>
                        <a href="/#contact" ><i className="bx bx-envelope"></i> Contact</a>
                     </li>
                  </ul>
               </nav>
            </div>
            <span title={(fonts===0)?"Dyslexia Friendly Font":"Standard Font"} onClick={changeFonts}>
            <Handicap />
            </span>
         </header>
         
      </>
   )
}