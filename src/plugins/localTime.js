let d=new Date();
function currentTime(){
  let h =d.getHours()
  let m =d.getMinutes()
  let t ='AM'
  if(h>11){t='PM'}
  if(h===0){h=12}
  else if(h>12){h=(h-12)}
  if(m<10){m='0'+m.toString()}
  return(h.toString()+':'+m+' '+t+'')
}
function weekDay(){
  let wd=d.getDay()
  switch(wd){
    case 0:wd='Sunday';break;
    case 1:wd='Monday';break;
    case 2:wd='Tuesday';break;
    case 3:wd='Wednesday';break;
    case 4:wd='Thursday';break;
    case 5:wd='Friday';break;
    case 6:wd='Saturday';break;
    default:wd='Some Day';break;
  }
  return wd
}
function currentDate(){
  let date= d.getDate().toString()
      let n
      if(date.length===2){
         n=date[1]
      }
      else{
         n=date[0]
      }
      switch(n){
         case "1":date=date+"st"
         break
         case "2":date=date+"nd"
         break
         case "3":date=date+"rd"
         break
         default:date=date+"th"
      }
      return date
}
export{weekDay,currentTime,currentDate}