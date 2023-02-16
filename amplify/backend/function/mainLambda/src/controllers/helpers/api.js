const axios=require('axios')
const aws = require('aws-sdk');
const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["LOCATION","WEATHER"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

const locationKey=Parameters[0]
const weatherKey=Parameters[1]
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