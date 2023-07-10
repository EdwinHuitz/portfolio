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
    date==="11"?n=date:n=date[1]
  }
  else{
      n=date[0]
  }
  switch(n){
      case "1":date=date+"st";break
      case "2":date=date+"nd";break
      case "3":date=date+"rd";break
      default:date=date+"th"
  }
  return date
}
function currentMonth(){
  let month= d.getMonth()
  switch(month){
    case 1:month="January";break
    case 2:month="February";break
    case 3:month="March";break
    case 4:month="April";break
    case 5:month="May";break
    case 6:month="June";break
    case 7:month="July";break
    case 8:month="August";break
    case 9:month="September";break
    case 10:month="October";break
    case 11:month="November";break
    case 12:month="December";break
    default:month="Mystery Month"
  }
  return month
}
export{weekDay,currentMonth,currentTime,currentDate}