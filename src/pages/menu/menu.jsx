import React from 'react'
import './menu.css'
export default function Menu(){
   //!restaurant menu similar to this page https://react-projects-5-menu.netlify.app/
   //let arr=["pancakes","waffles","omelette","biscuits & gravy","eggs benedict","hashbrown","loaded fries","bacon cheeseburger","reuben","milkshake","iced-tea","coffee"];
   return(
   <>
      <div className="menuNav">
         <h1 className="title">Sunny's Diner</h1>
         <h3 className="tabs"><button>All</button><button>Breakfast</button><button>Lunch</button><button>Drinks</button>
         </h3>
      </div>
   </>
   )
}