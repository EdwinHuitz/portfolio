const helpers = require('./helpers/api')

async function getWeather(req,res){
   let r = req.params
   let coords = [r.lat,r.long,r.unit]
   await helpers.getWeather(coords)
   .then((data)=>res.send(data))
}
async function getLocation(req,res){
   let r = req.params
   let coords = [r.lat,r.long]
   await helpers.getLocation(coords)
   .then((data)=>res.send(data))
}

module.exports={getWeather,getLocation};