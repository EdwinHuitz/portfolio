import React, {useState} from 'react'
import './menu.css'

export default function Menu(){
   const [cat,setCat]=useState(4)

   let foodArray=[[0,"Pancakes",9.99],[0,"Waffles",9.99],[0,"Omelette",13.95],[0,"Biscuits & Gravy",5.95],[0,"Eggs Benedict",6.75],[0,"Hashbrown",3.49],[1,"Loaded Fries",4.95],[1,"Bacon Cheeseburger",11.95],[1,"Reuben Sandwich",12.49],[2,"Milkshake",6.49],[2,"Iced-Tea",4.95],[2,"Coffee",3.49]];
   //array of numbers that is the total number of food items
   let numbers = [...Array(12).keys()]
   let path="assets/img/food/"

   function menuItems(foodType,foodName,foodPrice,index){
      let newName=''
      let newPath=''
      
      let nonPlural=checkPlurality(1,foodName).toLowerCase()
      let toPlural=checkPlurality(2,foodName)
      if(foodName.indexOf(' ')>=0){
         newName=foodName.replaceAll(' ','-')
         newPath = path+newName+".jpg"
      }
      else{
         newPath = path+foodName+".jpg"
      }

         return (<>
               <div key={index} className="menuItem" id={foodType} style={{display:foodType===cat?'flex':cat===3?'flex':'none'}}>
                     <img src={newPath} alt="" className="foodPic"></img>
                     <div className="foodDetail">
                        <span className="foodText"><b>{foodName}</b> <b className="foodPrice">${foodPrice}</b></span>
                        <hr></hr>
                        <p>{toPlural} are made straight from {nonPlural} mix in our kitchens. Which is brought to us fresh every single morning, straight from local farms bright and early!</p>
                     </div>
               </div>
      </>)
   
   }
   function checkPlurality(int,foodName){
      //name of food
      const n = foodName
      //length of name
      let l = n.length-1
      let val = n
      if(int===1){
         //ies to y
         if(n[l-2]==="i" && n[l-1]==="e" && n[l]==="s"){
            val=val.substring(0,l-2)
            val+="y"
         }
         //s to ""
         else if(n[l]==="s"){
            val=val.substring(0,l)
         }
      }else if(int===2){
         //convert h i y to proper plurals
         if(n[l]==="h" || n[l]==="i"){
            val+="es"
         }
         else if(n[l]==="y"){
            val=val.substring(0,l)
            val+="ies"
         }
         else if(n[l]!=="s"){
            val+="s"
         }
      }
      return val
   }
   function foodTypes(){
      let newPath=path
      let foods=[foodArray[0][1]+".jpg",foodArray[7][1].replace(" ","-")+".jpg",foodArray[10][1]+".jpg"]
      const foodNames=["Breakfast","Lunch","Refreshments"]
      return(
         foodNames.map((food,i)=>(
            <div key={i} className="menuItem" id={foodNames[i]} style={{display:cat===4?'flex':'none',cursor:"pointer",}} onClick={()=>setCat(i)}>
               <img src={newPath+foods[i]} alt="" className="foodPic"></img>
               <div className="foodDetail">
                  <span className="foodText justify-content-center"><b>{food}</b></span>
                  <hr></hr>
                  <p>{i===2?"A delicious assortment of our ":"A tasty selection of our "}{i===2?`${food.toLowerCase()},`:food.toLowerCase()+" meals, fresh from our kitchens and"}<br/>available to order 24/7!</p>
               </div>
            </div>
         ))
      )}
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
            {numbers.map((num,i)=>(
               menuItems(foodArray[num][0],foodArray[num][1],foodArray[num][2],i)
            ))}
         </div>
      </div>
   </>
   )
}