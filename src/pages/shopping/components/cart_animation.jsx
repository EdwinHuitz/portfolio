export default function cartAnimation(amount){
   const cList=document.getElementsByClassName("shoppingCart")
   return(checkAnimations(amount))
   function checkAnimations(n){
      if(cList[0].classList.contains("addShoppingCart")||cList[0].classList.contains("removeShoppingCart")){
         removeAnimations()
         setTimeout(()=>addAnimations(n),250)
         setTimeout(removeAnimations,900)
      }else{
         addAnimations(n)
         setTimeout(removeAnimations,900)
      }
   }
   function addAnimations(val){
      if(val>0){
         cList[0].classList.add("addShoppingCart")
         cList[1].classList.add("addShoppingCart")
      }else{
         cList[0].classList.add("removeShoppingCart")
         cList[1].classList.add("removeShoppingCart")
      }
   }
   function removeAnimations(){
      cList[0].classList.remove("addShoppingCart")
      cList[1].classList.remove("addShoppingCart")
      cList[0].classList.remove("removeShoppingCart")
      cList[1].classList.remove("removeShoppingCart")
   }
}