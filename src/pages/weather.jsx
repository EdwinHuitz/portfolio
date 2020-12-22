import React, {useState} from 'react'
import './weather.css';
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
  function getTime(){
    console.log(info)
    let d = new Date().getHours()
    if(info!== null){
      let m = new Date(info.sys.sunrise*1000).getHours()
      let n = new Date(info.sys.sunset*1000).getHours()
      if(d<n && d>=m)return true
      else return false
    }
  }
  return (
    <>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <div className={getTime()?'App day':'App night'}>
          <header className="App-header">
            {info===null?'':info.name,info.main.temp}
          </header>
          <main>
            {loading?<img src="/assets/img/loading.webp" className="loading" alt="loading" />:''}
            <p>
              {info===null?'Click the button below to take a look at today\'s weather forecast':info.name}
            </p>
            <button onClick={getCoords}>Click Me</button>
          </main>
        </div>
      </section>
    </>
  );
}

export default Weather;
