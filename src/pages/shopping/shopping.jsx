import { useState } from 'react'
import './shopping.css'
import Card from './components/cards/card'
import RowCard from './components/cards/row_card'
import ShoppingCartCard from './components/cards/shopping_cart_card'
import cartAnimation from './components/cart_animation'
export default function Shopping(){
   //state for each piece of clothing's page
   const [tabs, setTabs]=useState(0)
   //shopping cart's state
   const [shoppingCart, setShoppingCart]=useState([])
   
   function setCart(n){
      setShoppingCart([...shoppingCart,n[n.length-1]])
      console.log("Original Cart:",shoppingCart)
      cartAnimation(n[n.length-1].amount)
   }
   function updateCart(n){
      setShoppingCart(n.map((item)=>{return item}))
      console.log("Updated Cart:",shoppingCart)
   }
   function getItems(){
      let num=0
      shoppingCart.map(item=>(num+=item.amount))
      return num
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
                        <button className="navLinkBtn bx bx-cart shoppingCart" style={{fontSize:"1.5em",paddingLeft:"8px",paddingRight:"8px",margin:"0"}} onClick={()=>setTabs(7)}><span className="nav-item fs-6">{shoppingCart.length>0?getItems():0}</span></button>
                     </li>
                  </ul>
               </div>
               <div className="smaller w-100 p-3">
                  <ul className="d-flex justify-content-evenly">
                     <li className="nav-item"><button className="navLinkBtn">Clothes</button></li>
                     <li className="nav-item"><button className="navLinkBtn">Accessories</button></li>
                     <li className="nav-item">
                        <button className="navLinkBtn bx bx-cart shoppingCart" style={{fontSize:"1.5em",paddingLeft:"8px",paddingRight:"8px",margin:"0"}} onClick={()=>setTabs(7)}><span className="nav-item fs-6">{shoppingCart.length>0?getItems():0}</span></button>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
         <div id="shopDisplay" className="mainDisplay">
            <span className={tabs===1?"d-block":"d-none"}><RowCard clothes="Hats" setCart={setCart} /></span>
            <span className={tabs===2?"d-block":"d-none"}><RowCard clothes="Scarves" setCart={setCart} /></span>
            <span className={tabs===3?"d-block":"d-none"}><RowCard clothes="Shirts" setCart={setCart} /></span>
            <span className={tabs===4?"d-block":"d-none"}><RowCard clothes="Belts" setCart={setCart} /></span>
            <span className={tabs===5?"d-block":"d-none"}><RowCard clothes="Pants" setCart={setCart} /></span>
            <span className={tabs===6?"d-block":"d-none"}><RowCard clothes="Shoes" setCart={setCart} /></span>
            {shoppingCart.length>0?<span className={tabs===7?"d-block":"d-none"}><ShoppingCartCard cart={shoppingCart} setCart={setCart} updateCart={updateCart} /></span>:<h1  className={tabs===7?"d-block":"d-none"}>This cart is currently empty...</h1>}
            <span className={tabs===0?"d-flex justify-content-evenly w-100 p-3":"d-none"}>
               <div className="cardRow">
                  <Card clothes="Hats" setCart={setCart} /><Card clothes="Scarves" setCart={setCart} />
               </div>
               <div className="cardRow">
                  <Card clothes="Shirts" setCart={setCart} /><Card clothes="Belts" setCart={setCart} />
               </div>
               <div className="cardRow">
                  <Card clothes="Pants" setCart={setCart} /><Card clothes="Shoes" setCart={setCart} />
               </div>
            </span>
         </div>
      </div>
   </>)
}