import React from 'react'
import './menu.css'

export default function Menu(){

   let arr=[[0,"Pancakes"],[0,"Waffles"],[0,"Omelette"],[0,"Biscuits & Gravy"],[0,"Eggs Benedict"],[0,"Hashbrown"],[1,"Loaded Fries"],[1,"Bacon Cheeseburger"],[1,"Reuben Sandwich"],[2,"Milkshake"],[2,"Iced-Tea"],[2,"Coffee"]];
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
               <div className="menuItem" id={foodType}>
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
            <h3 className="tabs"><button>All</button><button>Breakfast</button><button>Lunch</button><button>Drinks</button>
            </h3>
         </div>
         <div className="menuList">
            {menuItems(arr[0][0],arr[0][1])}
            {menuItems(arr[1][0],arr[1][1])}
            {menuItems(arr[2][0],arr[2][1])}
            {menuItems(arr[3][0],arr[3][1])}
            {menuItems(arr[4][0],arr[4][1])}
            {menuItems(arr[5][0],arr[5][1])}
            {menuItems(arr[6][0],arr[6][1])}
            {menuItems(arr[7][0],arr[7][1])}
            {menuItems(arr[8][0],arr[8][1])}
            {menuItems(arr[9][0],arr[9][1])}
            {menuItems(arr[10][0],arr[10][1])}
            {menuItems(arr[11][0],arr[11][1])}
         </div>
      </div>
   </>
   )
}