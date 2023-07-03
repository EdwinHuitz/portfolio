import React from 'react'
import './card.css'
let path="assets/img/clothes/"
let clothes=["Hats","Shirts","Pants"]
let hats=["black-fedora","blue-cap","brown-fedora","grey-cap"]
let shirts=["blue-shirt","orange-shirt","salmon-shirt","white-shirt"]
let pants=["brown-pants","folded-pants","jeans","slacks"]

export default function Card(props){
   //TODO: turn prices into another map function
   let choice=props.i===clothes[0]?hats:props.i===clothes[1]?shirts:pants
   function generatePics(choice){
      return(
         <>
         {choice.map((c,i)=>(
            <img key={choice+i} className={"cardPic Pic"+i} src={path+props.i.toLowerCase()+"/"+c+".png"} alt={i}></img>
            ))}
         </>
      )
   }
   return(
   <>
      <div className="Grid Card">
         <h5 className="Title">{"Newest "+props.i}</h5>
         {generatePics(choice)}
         <h6 className="Price1">19.95</h6><h6 className="Price2">12.95</h6>
         <h6 className="Price3">14.95</h6><h6 className="Price4">17.95</h6>
      </div>
   </>)
}