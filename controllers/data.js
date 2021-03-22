const helpers = require('./helpers/api')

async function getWeather(req){
   const r = req
   let ans
   if(!isNaN(r.lat) && !isNaN(r.long) && isNaN(r.unit)){
      let coords = [r.lat,r.long,r.unit]
      await helpers.getWeather(coords)
      .then((data)=>ans=data)
      return(ans)
   }else{
      return('Error: You fucked up')
   }
}
async function getLocation(req){
   const r=req
   let ans
   if(!isNaN(r.lat) && !isNaN(r.long)){
      let coords = [r.lat,r.long]
      await helpers.getLocation(coords)
      .then((data)=>ans=data)
      return(ans)
   }else{
      return('Error: You fucked up')
   }
}

module.exports={getWeather,getLocation};