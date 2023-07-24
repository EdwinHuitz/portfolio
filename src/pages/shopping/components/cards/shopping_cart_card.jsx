//TODO:list of items, remove and edit quantity of items in cart, total price of items, recommended items
import './shopping_cart_card.css'
import sortArray from '../sort_array'
export default function ShoppingCart(props){
   const content=(props.cart.length>0)?[...sortArray(props.cart)]:[]
   console.log("Sorted Array:",content)
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
            <span key={i} className="SCItem justify-content-center align-content-center">
            <img className="SCImg" src={cItem.url} alt={cItem.title}></img>
            <h4 className="SCTitle p-3">{cItem.title}</h4>
            <h4 className="SCPrice p-3">${splitSum(cItem.price*cItem.amount)[0]}.{splitSum(cItem.price*cItem.amount)[1]}</h4>
            <h4 className="SCInput p-3 d-flex flex-row"><button className="subtractOne" onClick={()=>setKey(cItem,-1)}><span style={{position:"relative",top:"-6px"}}>-</span></button><input className={"px-3 SCNum "+i} readOnly={true} value={cItem.amount}></input><button className="addOne" onClick={()=>setKey(cItem,1)}><span style={{position:"relative",top:"-6px"}}>+</span></button></h4>
            </span>)
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

   function setKey(newItem,newAmount){
      props.setCart([{...newItem,amount:newAmount}])
   }
   
   return(<div className="d-flex flex-column justify-content-center align-items-center w-100 p-3">
   {checkCart()}
   
   {content.length>0?<><hr className="w-100 p-1"/><h4>Total Cost: ${splitSum(sum)[0]}.{splitSum(sum)[1]}</h4></>:""}
   </div>)
}