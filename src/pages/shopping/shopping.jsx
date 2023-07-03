import React from 'react'
import Card from './components/card.jsx'
import './shopping.css'

export default function Shopping(){
   
   return(
   <>
      <div className="sApp">
         <nav className="navHead">
            <h4 className="brand">Fashion Front</h4>
            <h4 className="links">Hats</h4>
            <h4 className="links">Scarves</h4>
            <h4 className="links">Shirts</h4>
            <h4 className="links">Belts</h4>
            <h4 className="links">Pants</h4>
            <h4 className="links">Shoes</h4>
            <i className="bx bx-cart shoppingCart"></i>
         </nav>
         <div className="mainDisplay">
            <Card i="Hats"/>
            <Card i="Shirts"/>
            <Card i="Pants"/>
         </div>
      </div>
   </>)
}