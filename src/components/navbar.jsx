import React,{useState} from 'react'
export default function Nav(){
   const [n,setN]=useState(0)
   function doit(){
      (n===1)?setN(0):setN(1)
   }
   return(
      <>
         <button type="button" className="mobile-nav-toggle d-xl-none" title={(n===0)?"Open Navigation Menu":"Close Navigation Menu"} onClick={doit}><i className="icofont-navigation-menu"></i></button>
         <header id="header">
            <div className="d-flex flex-column">
               <div className="profile">
                  <img src="assets/img/img.jpeg" alt="" className="img-fluid rounded-circle" />
                  <h1 className="text-light"><a href="/">Edwin Huitz</a></h1>
                  <div className="social-links mt-3 text-center">
                  <a href="mailto:edwinhuitz@gmail.com" className="github" title="My E-Mail"><i className="bx bx-envelope"></i></a>
                     <a href="https://www.linkedin.com/in/edwin-huitz/" target="_blank" rel="noreferrer" className="linkedin" title="My LinkedIn"><i className="bx bxl-linkedin"></i></a>
                     <a href="https://github.com/EdwinHuitz" target="_blank" rel="noreferrer" className="github" title="My GitHub"><i className="bx bxl-github"></i></a>
                  </div>
               </div>
               <nav className="nav-menu">
                  <ul>
                     <li className="active"><a href={"assets/files/Edwin_Huitz_Resume_"+new Date().getFullYear()+".pdf"} target="_blank" rel="noreferrer"><i className="bx bx-file"></i> <span>Resume</span></a></li>
                     <li><a href="/#hero"><i className="bx bx-home"></i> <span>Home</span></a></li>
                     <li><a href="/#portfolio"><i className="bx bx-book-content"></i> Portfolio</a></li>
                     <li><a href="http://infinite-hunger.surge.sh/" target="_blank" rel="noreferrer"><i className="bx bx-game"></i>Arcade Game</a></li>
                     <li><a href="/weather"><i className="bx bx-cloud-lightning"></i> Weather</a></li>
                  </ul>
               </nav>
            </div>
         </header>
      </>
   )
}