export default function sortArray(data){
   const list=[...data]
   //console.log('Original Array:',list)
   let newList=[]
   function arrayQuery(query,i,item){
      //console.log(query)
      if(i!=null){
         try{
            return(query[i].title===item[i].title)
         }catch(e){
            //console.log(e)
         }
      }
      else{
         try{
            return(query.title===item.title)
         }catch(e){
            //console.log(e)
         }
      }
   }
   list.forEach((item,i)=>{
      if(newList.length>0){
         if(item.length>1){
            const searchArr=list.find(q=>arrayQuery(q,i,item))
            if(searchArr!==undefined){
               item[i].amount=item[i].amount+1
               console.log("worked:",item[i].amount)
            }else{
               newList.push(item[i])
            }
         }else if(item.length===1){
            const searchArr=list.find(q=>arrayQuery(q,i,item))
            if(searchArr!==undefined){
               item.amount=item.amount+1
               console.log("worked:",item.amount)
            }else{
               newList.push(item[0])
            }
         }
      }else{
         if(item.length>1){
            newList.push(item[i])
         }else if(item.length===1){
            newList.push(item[0])
         }   
      }
   })
   return(newList)
}