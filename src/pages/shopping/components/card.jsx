import React from 'react'
import './card.css'
let path="assets/img/clothes/"
let clothes=["Hats","Shirts","Pants"]
let hats=["black-fedora","blue-cap","brown-fedora","grey-cap"]
let shirts=["blue-shirt","orange-shirt","salmon-shirt","white-shirt"]
let pants=["brown-pants","folded-pants","jeans","slacks"]
let prices=[14.75,12.95,19.49,16.99]
export default function Card(props){
   let choices=props.i===clothes[0]?hats:props.i===clothes[1]?shirts:pants
   function generatePics(){return(<>{choices.map((choice,i)=>(
   <img key={choices+i} className={"cardPic Pic"+i} src={path+props.i.toLowerCase()+"/"+choice+".png"} alt={i}></img>))}</>)}
   function generatePrices(){return(<>{prices.map((price,i)=>(<h6 key={price+i} className={"Price"+i}>{price}</h6>))}</>)}
   return(
   <>
      <div className="Grid Card">
         <h5 className="Title">{"Newest "+props.i}</h5>
         {generatePics()}
         {generatePrices()}
      </div>
   </>)
}