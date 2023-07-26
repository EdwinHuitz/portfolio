//TODO:recommended items
import './shopping_cart_card.css'
import cartAnimation from '../cart_animation'
import {useState} from 'react'
export default function ShoppingCart(props){
   const [content,setContent]=useState([])
   if(props.cart.length>0){
      if(content.length !== props.cart.length){
         setContent(props.cart)
         console.log("sorted cart:",content)
      }
   }
   let sum=0
   function checkCart(){
      if(content.length===0){
         return(<h1>This cart is currently empty...</h1>)
      }
      else{
         let cartContent=[]
         content.forEach((cItem,i)=>{
            sum+=cItem.price*cItem.amount
            cartContent.push(
            <span key={i} className="SCItem justify-content-center align-items-center">
               <img className="SCImg" src={cItem.url} alt={cItem.title}></img>
               <h4 className="SCTitle p-3">{cItem.title}</h4>
               <h4 className="SCPrice p-3">${splitSum(cItem.price*cItem.amount)[0]}.{splitSum(cItem.price*cItem.amount)[1]}</h4>
               <h4 className="SCInput p-3 d-flex flex-row">
                  <button type="button" className="btn btn-danger editBtns" onClick={()=>setKey(cItem,-1)}>
                     <span style={{position:"relative",top:"-.55em",left:"-.20em"}}>-</span>
                  </button>
                  <input className={"px-3 SCNum"} readOnly={true} value={cItem.amount}></input>
                  <button type="button" className="btn btn-success editBtns" onClick={()=>setKey(cItem,1)}>
                     <span style={{position:"relative",top:"-.55em",left:"-.30em"}}>+</span>
                  </button>
                  <button type="button" className="btn btn-secondary ms-1 editBtns" onClick={()=>setKey(cItem,0)}>
                     <span className="bx bx-trash" style={{position:"relative",top:"-.4em",left:"-.5em"}}></span>
                  </button>
               </h4>
            </span>)
         })
         return(cartContent)
      }
   }
   //splits the cent and dollar amount for the total price and makes sure the cents don't go under or over 2 decimals
   function splitSum(s){
      let newSum=(s+"").split(".")
      if(newSum[0].length>3){
         let hundreds=newSum[0].slice(newSum[0].length-3)
         newSum[0]=newSum[0].slice(0,newSum[0].length-3)+","+hundreds
      }
      if(newSum[1]===undefined){
         newSum[1]="00"
      }
      else if(newSum[1].length===1){
         newSum[1]=newSum[1]+"0"
      }
      else if(newSum[1].length>2){
         newSum[1]=newSum[1].slice(0,2)
      }
      return(newSum)
   }
   function setKey(newItem,newAmount){
      //console.log("new item:",newItem)
      cartAnimation(newAmount)
      if(newAmount!==0){
         setContent(content.map((item)=>{
            if(item.title===newItem.title){
               return {...newItem,amount:newItem.amount+newAmount}
            }else{
               return item
            }
         }))
      }
      else{
         setContent(content.filter(item=>item.url!==newItem.url))
      }
      props.updateCart(content.map(i=>{return i}))
      console.log("CART:",content)
   }

   return(<div className="d-flex flex-column justify-content-center align-items-center w-100 p-3">
   {checkCart()}
   
   {content.length>0?<><hr className="w-100 p-1"/><h4>Total Cost: ${splitSum(sum)[0]}.{splitSum(sum)[1]}</h4></>:""}
   </div>)
}