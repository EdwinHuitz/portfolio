import React, {useState} from 'react'
import './weather.css';
import Footer from '../components/footer'
import axios from 'axios';

function Weather() {
  const [info,setInfo]=useState(null)
  const [loading,setLoading]=useState(false)

  function getCoords(){
    setLoading(true)
    navigator.geolocation.getCurrentPosition(getData)
  }
  async function getData(gps){
    console.log('fetching data...')
    let loc = gps.coords
    let unit = 'imperial'
    await axios.get(`/api/${loc.longitude}&${loc.latitude}&${unit}`)
    .catch((err)=>console.log(err))
    .then((res)=>{
      setInfo(res.data)
      setLoading(false)
    })
    console.log('Done!')
  }
  function getIcon(){
    let num=info.weather[0].id;
    let ans="bx "
    if(num>=200&&num<300){ans+="bx-cloud-lightning"}
    else if(num>=300&&num<400){ans+="bx-cloud-light-rain"}
    else if(num>=500&&num<600){ans+="bx-cloud-rain"}
    else if(num>=600&&num<700){ans+="bx-cloud-snow"}
    else if(num>=700&&num<800){ans+="bx-water"}
    else if(num===800){ans+="bx-sun"}
    else if(num>=800&&num<900){ans+="bx-cloud"}
    else{ans="bx-sun"}
    return ans
  }
  function getTime(){
    let d = new Date().getHours()
    if(info!== null){
      let m = new Date(info.sys.sunrise*1000).getHours()
      let n = new Date(info.sys.sunset*1000).getHours()
      if(d<n && d>=m)return true
      else return false
    }
  }
  function currentTime(){
    let d=new Date();
    let wd=d.getDay()
    let h =d.getHours()
    let m =d.getMinutes()
    let t ='AM'
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
    if(h>11){t='PM'}
    if(h>12){h=(h-12)}
    if(m<10){m='0'+m.toString()}
    let str=wd+' '+h.toString()+':'+m+' '+t+''
    return str
  }
  function checkNull(...i){
    let line=[]
    if(info!==null){
      i.forEach((n)=>line.push(eval(n)))
      return line
    }
  }
  let dateTime=checkNull('info.name','info.sys.country')
  return (
    <>
        <div className='App'>
          <header className="App-header">
              {(info!=null)?<h4>{dateTime[0]+', '+dateTime[1]} | {currentTime()}</h4>:''}
          </header>
          {info!=null?
          <main className='weatherBox'>
            <div className="tempBox">
              <div className="iconS">
                <i className={getIcon()}></i>
              </div>
              <div className="mainS">
                {loading?<img src="/assets/img/loading.webp" className="loading" alt="loading" />:''}
                {Math.round(info.main.temp)}°F</div>
                <div className="middleS">feels like {Math.round(info.main.feels_like)}°F
                <hr style={{backgroundColor:"white",opacity:"20%",width:"90%"}} />
                </div>
            <div className="bottomA"><i className="bx bx-upvote"></i> {Math.round(info.main.temp_max)}°F<br/><i className="bx bx-downvote"></i> {Math.round(info.main.temp_min)}°F</div>
            <div className="bottomB"><i className="bx bx-droplet"></i> {Math.round(info.main.humidity)}%<br/><i className="bx bx-wind"></i> {Math.round(info.wind.speed)} MPH</div>
            </div>
          </main>:
            <><p>
              {info===null?'Click the button below to take a look at today\'s weather forecast':''}
            </p>
          <button onClick={getCoords}>Click Me</button></>}
        </div>
        <Footer />
    </>
  );
}

export default Weather;
