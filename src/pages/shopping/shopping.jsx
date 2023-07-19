import { useState } from 'react'
import './shopping.css'
import Card from './components/cards/card'
import RowCard from './components/cards/row_card'
export default function Shopping(){
   const [tabs, setTabs]=useState(0)
   const [shoppingCart, setShoppingCart]=useState([])
   let cList=document.getElementsByClassName("shoppingCart")
   function setCart(n){
      const list=[...shoppingCart]
      list.push(n)
      setShoppingCart(list)
      console.log(shoppingCart)
      if(cList[0].classList.contains("shakingShoppingCart")){
         removeAnimations()
         setTimeout(addAnimations,250)
         setTimeout(removeAnimations,1010)
      }else{
         addAnimations()
         setTimeout(removeAnimations,1010)
      }
   }
   function addAnimations(){
      cList[0].classList.add("shakingShoppingCart")
      cList[1].classList.add("shakingShoppingCart")
   }
   function removeAnimations(){
      cList[0].classList.remove("shakingShoppingCart")
      cList[1].classList.remove("shakingShoppingCart")
   }
   return(
   <>
      <div className="sApp">
         <nav className="navbar fixed-top navbar-expand-lg" style={{backgroundColor:"#131921",color:"silver"}}>
            <div className="container-fluid">
               <div className="collapse navbar-collapse">
                  <a className="navbar-brand brand" href="/#shopping" onClick={()=>setTabs(0)}>Fashion Front</a>
                  <ul className="d-flex justify-content-evenly align-content-center navbar-nav w-100 p-3">
                     <li className="nav-item"><button className="navLinkBtn" onClick={()=>setTabs(1)}>Hats</button></li>
                     <li className="nav-item"><button className="navLinkBtn" onClick={()=>setTabs(2)}>Scarves</button></li>
                     <li className="nav-item"><button className="navLinkBtn" onClick={()=>setTabs(3)}>Shirts</button></li>
                     <li className="nav-item"><button className="navLinkBtn" onClick={()=>setTabs(4)}>Belts</button></li>
                     <li className="nav-item"><button className="navLinkBtn" onClick={()=>setTabs(5)}>Pants</button></li>
                     <li className="nav-item"><button className="navLinkBtn" onClick={()=>setTabs(6)}>Shoes</button></li>
                     <li className="nav-item">
                        <button className="navLinkBtn bx bx-cart shoppingCart" style={{fontSize:"1.5em",paddingLeft:"8px",paddingRight:"8px",margin:"0"}}><span className="nav-item fs-6">{shoppingCart.length>0?shoppingCart.length:""}</span></button>
                     </li>
                  </ul>
               </div>
               <div className="smaller w-100 p-3">
                  <ul className="d-flex justify-content-evenly">
                     <li className="nav-item"><button className="navLinkBtn">Clothes</button></li>
                     <li className="nav-item"><button className="navLinkBtn">Accessories</button></li>
                     <li className="nav-item">
                        <button className="navLinkBtn bx bx-cart shoppingCart" style={{fontSize:"1.5em",paddingLeft:"8px",paddingRight:"8px",margin:"0"}}><span className="nav-item fs-6">{shoppingCart.length>0?shoppingCart.length:""}</span></button>
                     </li>
                  </ul>
               </div>

            </div>
         </nav>
         <div className="mainDisplay">
         {tabs===0?
            <><div className="cardRow d-flex justify-content-evenly">
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
            </div></>
         :tabs===1?<RowCard clothes="Hats" setCart={setCart} />:""
      }
         </div>
      </div>
   </>)
}