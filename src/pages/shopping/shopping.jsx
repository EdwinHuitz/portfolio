import React, {useState} from 'react'
import './shopping.css'
import Card from './components/card.jsx'
//TODO: move shopping cart so it remains in view on mobile screen
//TODO: create a function for setScreen to update window size to current window size whenever user changes window size 
export default function Shopping(){
   const [screen,setScreen]=useState(window.innerWidth)
   return(
   <>
      <div className="sApp">
         <nav className="navHead">
            <h4 className="brand" onClick={()=>setScreen(window.innerWidth)}>Fashion Front</h4>
            {screen>800?<><h4 className="links">Hats</h4><h4 className="links">Scarves</h4><h4 className="links">Shirts</h4><h4 className="links">Belts</h4><h4 className="links">Pants</h4><h4 className="links">Shoes</h4><i className="bx bx-cart shoppingCart"></i></>:<><h4 className="links">Clothes</h4><h4 className="links">Accessories</h4><i className="bx bx-cart shoppingCart"></i></>}
         </nav>
         <div className="mainDisplay">
            <Card clothes="Hats"/>
            <Card clothes="Shirts"/>
            <Card clothes="Pants"/>
         </div>
      </div>
   </>)
}