import React, {useState} from 'react'
import './card.css'
import DetailCard from './detail_card.jsx'
let path="assets/img/clothes/"
let clothes=["Hats","Shirts","Pants"]
let hats=["black-fedora","blue-cap","brown-fedora","grey-cap"]
let shirts=["blue-shirt","orange-shirt","salmon-shirt","white-shirt"]
let pants=["brown-pants","folded-pants","jeans","slacks"]
let prices=[14.75,12.95,19.49,16.99]
//on click will pass values to detail card and open it and set details to true
export default function Card(props){
   let choices=props.clothes===clothes[0]?hats:props.clothes===clothes[1]?shirts:pants
   const [details,setDetails]=useState(false)

   function generatePics(){
      return(<>{choices.map((choice,i)=>(
         <><div className={details===false?"hideDetailCard"+(i+1):"showDetailCard"+(i+1)}>
            <DetailCard key={i} image={<img key={choices+i} className={"cardPic Pic"+i} src={path+props.clothes.toLowerCase()+"/"+choice+".png"} alt={i}></img>} price={prices[i]} details={details} />
            </div>
         <img key={choices+i} className={"cardPic Pic"+i} src={path+props.clothes.toLowerCase()+"/"+choice+".png"} onClick={()=>setDetails(true) && console.log(details)} alt={i}></img></>
   ))}</>)}
   function generatePrices(){
      return(<>{prices.map((price,i)=>(
         <h6 key={price+i} className={"Price"+i} onClick={()=>setDetails(true)}>{price}</h6>
   ))}</>)}
   return(
   <>
      <div className="Grid Card">
         
      {/* <DetailCard/> */}
         <h5 className="Title">{"Newest "+props.clothes}</h5>
         {generatePics()}
         {generatePrices()}
      </div>
   </>)
}
//TODO: recently viewed, detailed view on click, on sale price, random prices