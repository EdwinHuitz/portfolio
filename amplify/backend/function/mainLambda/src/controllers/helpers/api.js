const axios=require('axios')
const aws = require('aws-sdk');


async function getLocation(coords){
   const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["LOCATION"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
   .promise();
   const locationKey=Parameters[0]["Value"]
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
   const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["WEATHER"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();
   const weatherKey=Parameters[0]["Value"]
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