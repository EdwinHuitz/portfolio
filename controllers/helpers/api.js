const axios=require('axios')

async function getLocation(coords){
   let res
   await axios.get('https://api.geoapify.com/v1/geocode/reverse',{
      params:{
         lat:coords[0],
         lon:coords[1],
         apiKey:process.env.LOCATION
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
         appid:process.env.WEATHER
      }})
   .catch((err)=>console.log(err))
   .then((response)=>{res=response.data})
   return res
}

module.exports={getLocation,getWeather}