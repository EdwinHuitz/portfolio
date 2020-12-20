import React from 'react'
function Nav(){

   return(
      <>
         <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
         <header id="header">
            <div className="d-flex flex-column">
               <div className="profile">
                  <img src="assets/img/img.jpeg" alt="" className="img-fluid rounded-circle" />
                  <h1 className="text-light"><a href="index.html">Edwin Huitz</a></h1>
                  <div className="social-links mt-3 text-center">
                     <a href="https://www.linkedin.com/in/edwin-huitz/" target="_blank" rel="noreferrer" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                     <a href="https://github.com/EdwinHuitz" target="_blank" rel="noreferrer" className="github"><i className="bx bxl-github"></i></a>
                  </div>
               </div>
               <nav className="nav-menu">
                  <ul>
                     <li className="active"><a href="index.html"><i className="bx bx-home"></i> <span>Home</span></a></li>
                     <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>
                     <li><a href="#portfolio"><i className="bx bx-book-content"></i> Portfolio</a></li>
                     <li><a href="#contact"><i className="bx bx-envelope"></i> Contact</a></li>
                     <li><a href="assets/files/Edwin_Huitz_2020.pdf"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                  </ul>
               </nav>
               <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
            </div>
         </header>
      </>
   )
}
export default Nav