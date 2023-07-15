import React, {useState} from 'react'
import './menu.css'

export default function Menu(){
   const [cat,setCat]=useState(4)

   let foodArray=[[0,"Pancakes",9.99],[0,"Waffles",9.99],[0,"Omelette",13.95],[0,"Biscuits & Gravy",5.95],[0,"Eggs Benedict",6.75],[0,"Hashbrown",3.49],[1,"Loaded Fries",4.95],[1,"Bacon Cheeseburger",11.95],[1,"Reuben Sandwich",12.49],[2,"Milkshake",6.49],[2,"Iced-Tea",4.95],[2,"Coffee",3.49]];
   //array of numbers that is the total number of food items
   let numbers = [...Array(12).keys()]
   let path="assets/img/food/"

   function menuItems(foodType,foodName,foodPrice){
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
                        <span className="foodText"><b>{foodName}</b> <b className="foodPrice">${foodPrice}</b></span>
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
            <h1 className="title" onClick={()=>setCat(4)}>Sunny's Diner</h1>
            <hr/>
            <h3 className="tabs">
               <button onClick={()=>setCat(3)} className={cat===3?"activeTabs":""}>All</button>
               <button onClick={()=>setCat(0)} className={cat===0?"activeTabs":""}>Breakfast</button>
               <button onClick={()=>setCat(1)} className={cat===1?"activeTabs":""}>Lunch</button>
               <button onClick={()=>setCat(2)} className={cat===2?"activeTabs":""}>Drinks</button>
            </h3>
         </div>
         <div className="menuList">
            {foodTypes()}
            {numbers.map((num)=>(
               menuItems(foodArray[num][0],foodArray[num][1],foodArray[num][2])
            ))}
         </div>
      </div>
   </>
   )
}