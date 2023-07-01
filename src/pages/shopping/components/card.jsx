import React from 'react'
import './card.css'

export default function Card(props){
   let path="assets/img/clothes/"
   let hats=["Hats","black-fedora","blue-cap","brown-fedora","grey-cap"]
   let shirts=["Shirts","blue-shirt","orange-shirt","salmon-shirt","white-shirt"]
   let pants=["Pants","brown-pants","folded-pants","jeans","slacks"]
   let choice=props.i===hats[0]?hats:props.i===shirts[0]?shirts:pants
   return(
   <>
      <div className="Grid Card">
         <h5 className="Title">{"Newest "+choice[0]}</h5>
         <img className="Pic1" src={path+props.i.toLowerCase()+"/"+choice[1]+".png"} alt="text"></img>
         <img className="Pic2" src={path+props.i.toLowerCase()+"/"+choice[2]+".png"} alt="text"></img>
         <h6 className='Price1'>19.95</h6><h6 className='Price2'>12.95</h6>
         <img className="Pic3" src={path+props.i.toLowerCase()+"/"+choice[3]+".png"} alt="text"></img>
         <img className="Pic4" src={path+props.i.toLowerCase()+"/"+choice[4]+".png"} alt="text"></img>
         <h6 className='Price3'>14.95</h6><h6 className='Price4'>17.95</h6>
      </div>
   </>)
}