import React, {useState} from 'react'
import './menu.css'

export default function Menu(){
   const [cat,setCat]=useState(4)

   let foodArray=[[0,"Pancakes"],[0,"Waffles"],[0,"Omelette"],[0,"Biscuits & Gravy"],[0,"Eggs Benedict"],[0,"Hashbrown"],[1,"Loaded Fries"],[1,"Bacon Cheeseburger"],[1,"Reuben Sandwich"],[2,"Milkshake"],[2,"Iced-Tea"],[2,"Coffee"]];
   //array of numbers that is the total number of food items
   let numbers = [...Array(12).keys()]
   let path="assets/img/food/"

   function menuItems(foodType,foodName){
      let newName=''
      let newPath=''
      if(foodName.indexOf(' ')>=0){
         newName=foodName.replaceAll(' ','-')
         newPath = path+newName+".jpg"
      }
      else{
         newPath = path+foodName+".jpg"
      }
         return (<>
               <div className="menuItem" id={foodType} style={{display:foodType===cat?'flex':cat===3?'flex':'none'}}>
                     <img src={newPath} alt="" className="foodPic"></img>
                     <div className="foodDetail">
                        <span className="foodText"><b>{foodName}</b> <b className="foodPrice">$15</b></span>
                        <hr></hr>
                        <p>{foodName} are made of {foodName} mix which is made of {foodName} mix which is made of {foodName} mix which is made of {foodName}!</p>
                     </div>
               </div>
      </>)
   
   }
   function foodTypes(){
      let breakfast=path+foodArray[0][1]+".jpg"
      let lunch=path+foodArray[7][1].replace(" ","-")+".jpg"
      let drinks=path+foodArray[10][1]+".jpg"
      return(<>
         <div className="menuItem" id="breakfast" style={{display:cat===4?'flex':'none',cursor:"pointer",}} onClick={()=>setCat(0)}>
            <img src={breakfast} alt="" className="foodPic"></img>
            <div className="foodDetail">
               <span className="foodText justify-content-center"><b>Breakfast</b></span>
               <hr></hr>
               <p>An assortment of our delicious breakfast menu items<br/> available to order 24/7!</p>
            </div>
         </div>
         <div className="menuItem" id="lunch" style={{display:cat===4?'flex':'none',cursor:"pointer"}} onClick={()=>setCat(1)}>
            <img src={lunch} alt="" className="foodPic"></img>
            <div className="foodDetail">
               <span className="foodText justify-content-center"><b>Lunch</b></span>
               <hr></hr>
               <p>An assortment of our delicious lunch menu items<br/> available to order 24/7!</p>
            </div>
         </div>
         <div className="menuItem" id="drinks" style={{display:cat===4?'flex':'none',cursor:"pointer"}} onClick={()=>setCat(2)}>
            <img src={drinks} alt="" className="foodPic"></img>
            <div className="foodDetail">
               <span className="foodText justify-content-center"><b>Refreshments</b></span>
               <hr></hr>
               <p>An assortment of our delicious refreshments<br/> available to order 24/7!</p>
            </div>
         </div>
      </>)
   }
   return(
   <>
      <div className="menuWrap">
         <div className="menuNav">
            <h1 className="title">Sunny's Diner</h1>
            <hr/>
            <h3 className="tabs"><button onClick={()=>setCat(3)}>All</button><button onClick={()=>setCat(0)}>Breakfast</button><button onClick={()=>setCat(1)}>Lunch</button><button onClick={()=>setCat(2)}>Drinks</button>
            </h3>
         </div>
         <div className="menuList">
            {foodTypes()}
            {numbers.map((num)=>(
               menuItems(foodArray[num][0],foodArray[num][1])
            ))}
         </div>
      </div>
   </>
   )
}