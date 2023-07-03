import React from "react"
import "./detail_card.css"

export default function details(props){
   return(
   <>
      <div className="detailCard">
         <h5 className="exit" onClick={()=>console.log(props.details)}>X</h5>
      </div>
   </>)
}