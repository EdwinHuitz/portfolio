const axios=require('axios')
const locationKey=process.env.REACT_APP_ENV_API_KEY.LOCATION
const weatherKey=process.env.REACT_APP_ENV_API_KEY.WEATHER
async function getLocation(coords){
   let res
   await axios.get('https://api.geoapify.com/v1/geocode/reverse',{
      params:{
         lat:coords[0],
         lon:coords[1],
         apiKey:locationKey
      }})
   .catch((error)=>console.log(error))
   .then((response)=>{res=response.data})
   return res
}

async function getWeather(coords){
   let res
   await axios.get('https://api.openweathermap.org/data/2.5/weather',{
      params:{
         lat:coords[0],
         lon:coords[1],
         units:coords[2],
         appid:weatherKey
      }})
   .catch((err)=>console.log(err))
   .then((response)=>{res=response.data})
   return res
}

module.exports={getLocation,getWeather}