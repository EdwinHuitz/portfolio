import React from 'react'
import './shopping.css'
import Footer from '../../components/footer'

export default function Shopping(){
   
   return(
   <>
      <div className="sApp">
         <nav className="nav_head">
            <h1 className="brand">Beige Fashion</h1>
            <h1>Hats</h1>
            <h1>Shirts</h1>
            <h1>Pants</h1>
            <i className="bx bx-cart"></i>
         </nav>
         <div>
            <p>main page</p>
         </div>
      </div>
      <Footer color={['#040b14','white']} />
   </>)
}