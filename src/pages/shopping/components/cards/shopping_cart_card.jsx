//TODO:list of items, remove and edit quantity of items in cart, total price of items, recommended items
//import {useState} from 'react'
import './shopping_cart_card.css'
export default function ShoppingCart(props){
   //const [cart,setCart]=useState(0)
   const content=props.cart
   let sum=0
   function checkCart(){
      if(content.length===0){
         return(<h1>This cart is currently empty...</h1>)
      }
      else{
         content.map((item,i)=>(sum+=item[i].price))
         return(content.map((clothes,i)=>(
            <><span key={i} className="SCItem"><img className="SCImg" src={clothes[i].url} alt={clothes[i].title}></img>
            <h4 className="SCTitle p-3">{clothes[i].title}</h4>
            <h4 className="SCPrice p-3">${clothes[i].price}</h4>
            <input className="SCInput p-3" type="number" defaultValue={clothes[i].amount} /></span>
            </>
            //console.log(clothes[0].title,clothes[0].price,clothes[0].url,clothes[0].amount)
         )))
      }
   }
   //splits the cent and dollar amount for the total price and makes sure the cents don't go under or over 2 decimals
   function splitSum(s){
      let newSum=(s+"").split(".")
      if(newSum[1].length===1){
         newSum[1]=newSum[1]+"0"
      }
      else if(newSum[1].length>2){
         newSum[1]=newSum[1].slice(0,2)
      }
      return(newSum)
   }
   return(<div className="d-flex flex-column justify-content-center align-items-center w-100 p-3">
   {checkCart()}
   <hr className="w-100 p-1"/>
   {content.length>0?<h4>Total Cost: ${splitSum(sum)[0]}.{splitSum(sum)[1]}</h4>:""}
   </div>)
}