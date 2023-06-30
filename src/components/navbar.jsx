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
   let tags=['#home','#portfolio','#game','#weather','#menu','#shopping','#contact']
   return(
      <>
         <button type="button" className="mobile-nav-toggle d-block" title={(n===0)?"Open Navigation Menu":"Close Navigation Menu"} onClick={toggleMenu}>
            <i className="bx bx-menu"></i>
         </button>
         <header id="header" ref={header} style={{backgroundColor:hash===tags[1]?"#0F052E":hash===tags[4]?"#0B1828":hash===tags[5]?"#232f3e":"#040b14"}}>
            <div className="d-flex flex-column">
               <nav className="nav-menu">
                  <ul>
                     <li className="active" style={{paddingBottom:"10vh"}}><a href={"assets/files/Edwin_Huitz_Resume_"+new Date().getFullYear()+".pdf"} rel="noreferrer"><i className="bx bx-file"></i> <span>Resume</span></a><br/></li>
                     <li className={hash===tags[0]?"active":""}>
                        <a href="/#home"onClick={toggleMenu} ><i className="bx bx-home"></i> <span>Home</span></a>
                     </li>
                     <li className={hash===tags[1]?"active":""}>
                        <a href="/#portfolio"onClick={toggleMenu} ><i className="bx bx-book-content"></i> Portfolio</a>
                     </li>
                     <li className={hash===tags[2]?"active":""}>
                        <a href="http://infinite-hunger.surge.sh/" target="_blank" rel="noreferrer" ><i className="bx bx-game"></i>Arcade Game</a></li>
                        <li className={hash===tags[3]?"active":""}>
                        <a href="/#weather"onClick={toggleMenu} ><i className="bx bx-cloud-lightning"></i> Weather</a>
                     </li>
                     <li className={hash===tags[4]?"active":""}>
                        <a href="#menu"onClick={toggleMenu} ><i className="bx bx-food-menu"></i>Breakfast Menu</a>
                     </li>
                     <li className={hash===tags[5]?"active":""}>
                        <a href="#shopping"onClick={toggleMenu} ><i className="bx bx-cart"></i> Shopping Page</a>
                     </li>
                     <li className={hash===tags[6]?"active":""}>
                        <a href="/#contact"onClick={toggleMenu} ><i className="bx bx-envelope"></i> Contact</a>
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