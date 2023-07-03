import React, {useState} from 'react'
import './menu.css'

export default function Menu(){
   const [cat,setCat]=useState(3)

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
   //!restaurant menu similar to this page https://react-projects-5-menu.netlify.app/
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
            {numbers.map((num)=>(
               menuItems(foodArray[num][0],foodArray[num][1])
            ))}
         </div>
      </div>
   </>
   )
}