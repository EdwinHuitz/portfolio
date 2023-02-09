import React from 'react'
import './menu.css'
export default function Menu(){
   //!restaurant menu similar to this page https://react-projects-5-menu.netlify.app/
   //let arr=["pancakes","waffles","omelette","biscuits & gravy","eggs benedict","hashbrown","loaded fries","bacon cheeseburger","reuben","milkshake","iced-tea","coffee"];
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
            <div className="menuItem">
               <img src="assets/img/food/pancakes.jpg" alt="" className="foodPic"></img>
               <div className="foodDetail">
                  <span className="foodText"><b>Pancakes</b> <b className="foodPrice">$15</b></span>
                  <hr></hr>
                  <p>Pancakes are made of pancake mix which is made of pancake mix which is made of pancake mix which is made of pancake mix.</p>
               </div>
            </div>
         </div>
      </div>
   </>
   )
}