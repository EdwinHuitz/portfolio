import React from 'react'
import './shopping.css'
import Card from './components/card.jsx'
//TODO: animate the shopping cart and add a number to it whenever the user clicks the buy button 
export default function Shopping(){
   return(
   <>
      <div className="sApp">
         <nav className="navHead">
            <h4 className="brand">Fashion Front</h4>
            <h4 className="larger shoppingLinks">Hats</h4>
            <h4 className="larger shoppingLinks">Scarves</h4>
            <h4 className="larger shoppingLinks">Shirts</h4>
            <h4 className="larger shoppingLinks">Belts</h4>
            <h4 className="larger shoppingLinks">Pants</h4>
            <h4 className="larger shoppingLinks">Shoes</h4>
            <h4 className="smaller shoppingLinks">Clothes</h4>
            <h4 className="smaller shoppingLinks">Accessories</h4>
            <i className="bx bx-cart shoppingCart"></i>
         </nav>
         <div className="mainDisplay">
            <Card clothes="Hats"/>
            <Card clothes="Scarves"/>
            <Card clothes="Shirts"/>
            <Card clothes="Belts"/>
            <Card clothes="Pants"/>
            <Card clothes="Shoes"/>
         </div>
      </div>
   </>)
}