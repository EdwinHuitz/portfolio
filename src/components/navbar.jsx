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
   function checkHome(){
      try {
         let backdrop=document.getElementsByClassName("offcanvas-backdrop fade show")
         if(backdrop[0]!==undefined){
            if(hash!==""){
               document.querySelector(".offcanvas-backdrop").style.setProperty("visibility","visible")
            }
         }
      } catch (error) {
         console.log(error)
      }
   }
   let hash=window.location.hash
   let tags=['#home','#contact','#portfolio','#game','#menu','#shopping','#todo','#weather']
   return(
      <>
         <button className="mobile-nav-toggle" title="Open Navigation Menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft" aria-label="Toggle navigation" style={{visibility:window.innerWidth>991.5 && hash===""?"hidden":"visible"}}>
            <i className="bx bx-menu"></i>
         </button>
         
         <div className={window.innerWidth>991.5?"offcanvas offcanvas-start show":"offcanvas offcanvas-start"} data-bs-scroll="true" tabIndex="-1" id="offcanvasLeft" aria-labelledby="offCanvasLabel" style={{backgroundColor:hash===tags[0]?"#000000":hash===tags[4]?"#232f3e":hash===tags[6]?"#0B1828":hash===tags[7]?"#232f3e":"#040b14",opacity:"0.93",maxWidth:"15em"}}>
            <div className="w-100 p-3 d-flex justify-content-end offcanvas-header">
               <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{backgroundColor:"white",visibility:window.innerWidth>991.5 && hash===""?"hidden":"visible"}}></button>
            </div>
            <div className="offcanvas-body">
               <div className="d-flex flex-column">
                  <nav className="nav-menu">
                     <ul>
                        <li className="active" style={{paddingBottom:"5vh"}}><!--a href={"assets/files/Edwin_Huitz_Resume_"+new Date().getFullYear()+".pdf"} rel="noreferrer"><i className="bx bx-file"></i> <span>Resume</span></a--><br/></li>
                        <li className={hash===tags[0]?"active":""}>
                           <a href="/#home" ><i className="bx bx-home"></i> <span>Home</span></a>
                        </li>
                        <li className={hash===tags[1]?"active":""}>
                           <a href="/#contact" ><i className="bx bx-envelope"></i> Contact Me</a>
                        </li>
                        <li className={hash===tags[2]?"active dropdown":"dropdown"}>
                           <a href="/#portfolio" role="button" data-bs-toggle="dropdown" aria-expanded="false" className="dropdown-toggle" ><i className="bx bx-book-content"></i> Portfolio</a>
                           <ul className="dropdown-menu" style={{backgroundColor:hash===tags[0]?"#000000":hash===tags[4]?"#232f3e":hash===tags[6]?"#0B1828":hash===tags[7]?"#232f3e":"#040b14",border:"none",opacity:"0.93",maxWidth:"15em"}}>
                              {/* <li className={hash===tags[3]?"active":""}>
                                 <a href="http://infinite-hunger.surge.sh/" target="_blank" rel="noreferrer" ><i className="bx bx-game"></i>Arcade Game</a>
                              </li> */}
                              <li className={hash===tags[4]?"active":""}>
                                 <a href="/#menu" ><i className="bx bx-food-menu"></i>Diner Menu</a>
                              </li>
                              <li className={hash===tags[5]?"active":""}>
                                 <a href="/#shopping" ><i className="bx bx-cart"></i> Shopping Page</a>
                              </li>
                              <li className={hash===tags[6]?"active":""}>
                                 <a href="/#todo" ><i className="bx bx-list-ul"></i>To-Do List</a>
                              </li>
                              <li className={hash===tags[7]?"active":""}>
                                 <a href="/#weather" ><i className="bx bx-cloud-lightning"></i> Weather</a>
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </nav>
               </div>
               <span title={(fonts===0)?"Dyslexia Friendly Font":"Standard Font"} onClick={changeFonts}>
                  <Handicap />
               </span>
            </div>
         </div>
         {checkHome()}
      </>
   )
}
