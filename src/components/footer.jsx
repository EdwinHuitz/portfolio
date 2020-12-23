import React from 'react'

function Footer(props){
   function date(){
      let year=new Date();
      return year.getFullYear();
   }
   return(
      <>
      <footer style={(props.color===null)?'':{backgroundColor:props.color[0], width:'100%',color:props.color[1]}}>
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