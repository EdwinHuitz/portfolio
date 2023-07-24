import React from 'react'
import './footer.css'

export default function Footer(props){
   function date(){
      let year=new Date();
      return year.getFullYear();
   }
   return(
      <>
      <footer className="fixed-bottom" style={(props.color===null)?'':{backgroundColor:props.color[0],color:props.color[1]}}>
         <div className="container">
            <div>
            &copy; <strong>{date()} All Rights Reserved</strong>
            </div>
         </div>
      </footer>
      </>
   )
}