import React from "react"
import "./detail_card.css"

export default function details(props){
   
   return(
   <>
      <div className="detailCard">
         <img className="zoomImage" src={props.path} alt={props.clothes}></img>
         <h4 className="title">{props.clothes}</h4><h6 className="price">{props.price}</h6>
         <button className="button">Buy now</button>
         <h5 className="exit" onClick={()=>console.log(props.path)}>X</h5>
      </div>
   </>)
}