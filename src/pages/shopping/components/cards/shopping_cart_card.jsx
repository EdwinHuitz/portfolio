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
         let cartContent=[]
         let int=100
         content.forEach(c => {
            //console.log(c[0]["title"])
            console.log(c.length)
            if(c.length>1){
               c.map((item)=>(sum+=item.price))
               cartContent.push(c.map((clothes,i)=>(
               <span key={i} className="SCItem">
                  <img className="SCImg" src={clothes.url} alt={clothes.title}></img>
                  <h4 className="SCTitle p-3">{clothes.title}</h4>
                  <h4 className="SCPrice p-3">${clothes.price}</h4>
                  <input className="SCInput p-3" type="number" defaultValue={clothes.amount} />
               </span>
               //console.log(clothes[0].title,clothes[0].price,clothes[0].url,clothes[0].amount)
               )))
            }else if(c.length===1){
               sum+=c[0].price
               cartContent.push(<span key={int} className="SCItem">
               <img className="SCImg" src={c[0].url} alt={c[0].title}></img>
               <h4 className="SCTitle p-3">{c[0].title}</h4>
               <h4 className="SCPrice p-3">${c[0].price}</h4>
               <input className="SCInput p-3" type="number" defaultValue={c[0].amount} />
               </span>)
               int++
            }
         })
         return(cartContent)
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
   
   {content.length>0?<><hr className="w-100 p-1"/><h4>Total Cost: ${splitSum(sum)[0]}.{splitSum(sum)[1]}</h4></>:""}
   </div>)
}