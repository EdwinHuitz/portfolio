import React, {useState} from 'react'
import './weather.css';
import axios from 'axios';
import {currentTime,weekDay} from '../../plugins/localTime.js'
export default function Weather() {
  const [info,setInfo]=useState(null)
  const [spin,setSpin]=useState("")

  function getCoords(){
    setSpin("Spin")
    navigator.geolocation.getCurrentPosition(getData)
  }
  async function getData(gps){
    console.log('fetching data...')
    let loc = gps.coords
    let unit = 'imperial'
    let des = ''
    axios.defaults.baseURL = "https://" + window.location.hostname
    try{
      (process.env.NODE_ENV==='development')?des='http://localhost:8080/api/':des='api/'
      await axios.get(des,{params:{data:'weather',long:loc.longitude,lat:loc.latitude,unit:unit}})
      .catch((err)=>console.log(err))
      .then((res)=>{setInfo(res.data)})
    }
    catch(err){console.error(err)}
    finally{console.log('Done!')}
  }
  function getIcon(){
    let num=info.weather[0].id;
    let ans="bx "
    if(num>=200&&num<300){ans+="bx-cloud-lightning"}
    else if(num>=300&&num<400){ans+="bx-cloud-light-rain"}
    else if(num>=500&&num<600){ans+="bx-cloud-rain"}
    else if(num>=600&&num<700){ans+="bx-cloud-snow"}
    else if(num>=700&&num<800){ans+="bx-water"}
    else if(num===800){if(getTime()){ans+="bx-sun"}else{ans+="bx-moon"}}
    else if(num>=800&&num<900){ans+="bx-cloud"}
    else{if(getTime()){ans+="bx-sun"}else{ans+="bx-moon"}}
    forcast=info.weather[0].description
    forcast=forcast[0].toUpperCase()+forcast.substring(1)
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
  function checkNull(...i){
    let line=[]
    if(info!==null){
      //eslint-disable-next-line
      i.forEach((n)=>line.push(eval(n)))
      return line
    }
  }
  let dateTime=checkNull('info.name','info.sys.country')
  let forcast
  return (
    <>
        <div className='wApp'>
          <header className="App-header">{(info!=null)?<h4>{dateTime[0]+', '+dateTime[1]} | {weekDay()+' '+currentTime()}</h4>:''}</header>
          {info!=null?
            <div className='weatherBox'>
              <div className="tempBox">
                <div className="iconS"><i className={getIcon()}></i></div>
                <div className="mainS">{Math.round(info.main.temp)}°F</div>
                <div className="middleS">feels like {Math.round(info.main.feels_like)}°F
                  <hr style={{backgroundColor:"white",opacity:"20%",width:"90%"}} />
                </div>
                <div className="forcast">{forcast}</div>
                <div className="bottomA"><i className="bx bx-upvote"></i> {Math.round(info.main.temp_max)}°F<br/><i className="bx bx-downvote"></i> {Math.round(info.main.temp_min)}°F</div>
                <div className="bottomB"><i className="bx bx-droplet"></i> {Math.round(info.main.humidity)}%<br/><i className="bx bx-wind"></i> {Math.round(info.wind.speed)} MPH</div>
              </div>
            </div>
          :
            <><h5>Click the button below to take a look at today's weather forecast</h5><br/>
            <button className="wBtn" onClick={getCoords}><i className={"refresh "+spin+" bx bx-refresh"}></i></button></>
          }
        </div>
    </>
  );
}
