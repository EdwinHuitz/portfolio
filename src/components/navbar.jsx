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
                  <a href="mailto:edwinhuitz@gmail.com" className="github"><i className="bx bx-envelope"></i></a>
                     <a href="https://www.linkedin.com/in/edwin-huitz/" target="_blank" rel="noreferrer" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                     <a href="https://github.com/EdwinHuitz" target="_blank" rel="noreferrer" className="github"><i className="bx bxl-github"></i></a>
                  </div>
               </div>
               <nav className="nav-menu">
                  <ul>
                     <li className="active"><a href="assets/files/Edwin_Huitz_Resume_2020.pdf"><i className="bx bx-file"></i> <span>Resume</span></a></li>
                     <li><a href="/#hero"><i className="bx bx-home"></i> <span>Home</span></a></li>
                     <li><a href="/#portfolio"><i className="bx bx-book-content"></i> Portfolio</a></li>
                     <li><a href="http://infinite-hunger.surge.sh/" target="_blank" rel="noreferrer"><i className="bx bx-game"></i>Arcade Game</a></li>
                     <li><a href="/weather"><i className="bx bx-cloud-lightning"></i> Weather</a></li>
                  </ul>
               </nav>
               <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
            </div>
         </header>
      </>
   )
}
export default Nav