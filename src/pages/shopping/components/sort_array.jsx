export default function sortArray(data){
   const list=[...data]
   console.log('Original Array:',list)
   let newList=[]
   //checks if the list item's title is equal to the other item's title 
   function arrayQuery(query,item){
      try{
         return(query.title===item.title)
      }catch(e)
      {
         console.warn(e)
      }
   }
   //searches for duplicate titles in the given array and if one is found, returns true otherwise returns false
   function searchTitles(query,item){
      try{
         let sum=0
         let val
         query.forEach(array=>{
            //if array holds multiple values
            if(array.length>1){array.forEach(value=>{if(value.title===item.title){val=value;console.log(value.title);sum+=1}})}
            //if array holds one value
            else{if(array.title===item.title){sum+=1}}
         })
         //returns values correctly
         if(sum>=2){console.log("returned true",sum,val.title,item.title);return(true)}
         else{console.log("returned false",val.title,item.title);return(false)}
      }catch(e){console.warn(e)}
   }
   //iterates through the given array and flattens it while removing any duplicates and updating the amount values where necessary
   list.forEach((item,i)=>{
      //if newly sorted array already holds values
      if(newList.length>0){
         const multiSearch=list.find(q=>arrayQuery(q[i],item[i]))
         const singleSearch=list.find(q=>arrayQuery(q,item[0]))
         const multiListPosition=newList.find(q=>arrayQuery(q,item[i]))
         const singleListPosition=newList.find(q=>arrayQuery(q,item[0]))
         //if item holds more than one value
         if(item.length>1){
            //if item's value is not in the array
            if(multiSearch===undefined){
               //adds item to newly sorted array
               newList.push(item[i])
               
            //if the search for more than one value comes back true
            //this search is necessary to keep the value of amount from incrementing every time a page is changed or button is clicked
            }else if(searchTitles(list,item[i])===true){
                  //increments value of item
                  item[i].amount+=1
                  //removes old item with original value and adds new item with new value
                  newList.splice(multiListPosition,1,item[i])
                  console.log("multi worked:",item[i].amount)
            }
         //if item only holds one value
         }else if(item.length===1){
            if(singleSearch===undefined){
               newList.push(item[0])
            }else if(searchTitles(list,item)===true){
               item.amount+=1
               newList.splice(singleListPosition,1,item[0])
               console.log("single worked:",item.amount)
            }
         }
      //if newly sorted array doesn't hold any values yet
      }else{
         //pushes the first value into the new array
         if(item.length>1){
            newList.push(item[i])
         }else if(item.length===1){
            newList.push(item[0])
         }   
      }
   })
   return(newList)
}