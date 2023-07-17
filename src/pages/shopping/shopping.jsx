import { useState } from 'react'
import './shopping.css'
import Card from './components/card.jsx'
//TODO: animate the shopping cart and add a number to it whenever the user clicks the buy button 
export default function Shopping(){
   const [shoppingCart, setShoppingCart]=useState([])
   function setCart(n){
      const list=[...shoppingCart]
      list.push(n)
      setShoppingCart(list)
      let cList=document.getElementsByClassName("shoppingCart")
      if(cList[0].classList.contains("shakingShoppingCart")){
         cList[0].classList.remove("shakingShoppingCart")
         cList[1].classList.remove("shakingShoppingCart")
         setTimeout(addAnimations,250)
      }else{
         cList[0].classList.add("shakingShoppingCart")
         cList[1].classList.add("shakingShoppingCart")
      }
   }
   function addAnimations(){
      let cList=document.getElementsByClassName("shoppingCart")
      cList[0].classList.add("shakingShoppingCart")
      cList[1].classList.add("shakingShoppingCart")
   }
   return(
   <>
      <div className="sApp">
         <nav className="navbar fixed-top navbar-expand-lg" style={{backgroundColor:"#131921",color:"silver"}}>
            <div className="container-fluid">
               <div className="collapse navbar-collapse">
                  <a className="navbar-brand brand" href="/#shopping">Fashion Front</a>
                  <ul className="d-flex justify-content-evenly align-content-center navbar-nav w-100 p-3">
                     <li className="nav-item"><button className="navLinkBtn">Hats</button></li>
                     <li className="nav-item"><button className="navLinkBtn">Scarves</button></li>
                     <li className="nav-item"><button className="navLinkBtn">Shirts</button></li>
                     <li className="nav-item"><button className="navLinkBtn">Belts</button></li>
                     <li className="nav-item"><button className="navLinkBtn">Pants</button></li>
                     <li className="nav-item"><button className="navLinkBtn">Shoes</button></li>
                     <li className="nav-item"><button className="navLinkBtn bx bx-cart shoppingCart" style={{fontSize:"1.5em",paddingLeft:"8px",paddingRight:"8px",margin:"0"}}><span className="nav-item fs-6">{shoppingCart.length>0?shoppingCart.length:""}</span></button></li>
                  </ul>
               </div>
               <div className="smaller w-100 p-3">
                  <ul className="d-flex justify-content-evenly">
                     <li className="nav-item"><button className="navLinkBtn">Clothes</button></li>
                     <li className="nav-item"><button className="navLinkBtn">Accessories</button></li>
                     <li className="nav-item"><button className="navLinkBtn bx bx-cart shoppingCart" style={{fontSize:"1.5em",paddingLeft:"8px",paddingRight:"8px",margin:"0"}}><span className="nav-item fs-6">{shoppingCart.length>0?shoppingCart.length:""}</span></button></li>
                  </ul>
               </div>
            </div>
         </nav>
         <div className="mainDisplay">
            <div className="cardRow d-flex justify-content-evenly">
            <Card clothes="Hats" setCart={setCart} />
            <Card clothes="Scarves" setCart={setCart} />
            </div>
            <div className="cardRow d-flex justify-content-evenly">
            <Card clothes="Shirts" setCart={setCart} />
            <Card clothes="Belts" setCart={setCart} />
            </div>
            <div className="cardRow d-flex justify-content-evenly">
            <Card clothes="Pants" setCart={setCart} />
            <Card clothes="Shoes" setCart={setCart} />
            </div>
         </div>
      </div>
   </>)
}