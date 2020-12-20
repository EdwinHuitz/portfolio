import React from 'react'

function Footer(){
   function date(){
      let year=new Date();
      return year.getFullYear();
   }
   return(
      <>
      <footer>
         <div className="container" style={{display:'flex', justifyContent:'center'}}>
            <div>
            &copy; <strong>{date()} All Rights Reserved</strong>
            </div>
         </div>
      </footer>
      </>
   )
}
export default Footer