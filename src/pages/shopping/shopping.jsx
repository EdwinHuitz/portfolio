import React from 'react'
import Card from './components/card.jsx'
import './shopping.css'

export default function Shopping(){
   
   return(
   <>
      <div className="sApp">
         <nav className="navHead">
            <h1 className="brand">Beige Fashion</h1>
            <h1>Hats</h1>
            <h1>Shirts</h1>
            <h1>Pants</h1>
            <i className="bx bx-cart"></i>
         </nav>
         <div className="mainDisplay">
            <Card/><Card/>
         </div>
      </div>
   </>)
}