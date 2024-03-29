//TODO:having more than one item in the cart causes a duplication error when changing an item's quantity, and I need to review for more errors
function sortArray(data){
   const list=[...data]
   //console.log('Original Array:',list)
   let newList=[]
   //checks if the list item's title is equal to the other item's title 
   function checkTitles(query,item){
      return(query.title===item.title)
   }
   //searches for duplicate titles in the given array and if one is found, returns true otherwise returns false
   function searchTitles(query,item){
      try{
         let sum=0
         query.forEach(array=>{
            //compares the array's value to the item's value
            if(array.title===item.title){sum+=1}
         })
         if(sum>=1){
            return(true)
         }
         else{
            return(false)
         }
      }catch(e){console.warn(e)}
   }
   //iterates through the given array and removes any duplicates while updating the amount values where necessary
   list.forEach((item)=>{
      //if newly sorted array already holds values
      if(newList.length>0){
         const titleSearch=newList.find(q=>checkTitles(q,item))
         const duplicateSearch=newList.find(q=>checkTitles(q,item))
         //if the list does not already include this item
         if(titleSearch===undefined){
            console.log("adding item:",item)
            newList.push(item)
            //if the list finds a match for this item
         }else if(searchTitles(newList,item)===true){
            if(duplicateSearch.amount+item.amount>0){
               //console.log("duplicates found:",duplicateSearch,item)
               newList.splice(duplicateSearch,1,{...item,amount:duplicateSearch.amount+item.amount})
            }
            else{
               console.log("deleting item:",duplicateSearch)
               newList.splice(duplicateSearch,1)
            }
         }
      //if newly sorted array doesn't hold any values yet
      }else{
         //pushes the first value into the new array
         newList.push(item)   
      }
   })
   return(newList)
}
export default sortArray