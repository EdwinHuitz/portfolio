import React from 'react'
import './card.css'

export default function Card(props){
   let path="assets/img/clothes/"
   let shirts=["blue-shirt","orange-shirt","salmon-shirt","white-shirt"]
   let hats=["black-fedora","blue-cap","brown-fedora","grey-cap"]
   let pants=["brown-pants","folded-pants","jeans","slacks"]
   let choice=props.i.toLowerCase()==="hats"?hats:props.i.toLowerCase()==="pants"?pants:shirts
   return(
   <>
      <div className="Card">
         <h3>Newest {props.i}</h3>
         <img src={path+props.i.toLowerCase()+"/"+choice[0]+".png"} alt="text"></img>
         <img src={path+props.i.toLowerCase()+"/"+choice[1]+".png"} alt="text"></img><br/>
         <img src={path+props.i.toLowerCase()+"/"+choice[2]+".png"} alt="text"></img>
         <img src={path+props.i.toLowerCase()+"/"+choice[3]+".png"} alt="text"></img>
      </div>
   </>)
}