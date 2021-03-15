const helpers = require('./helpers/api')

async function getWeather(req,res){
   if(!isNaN(req.params.lat) && !isNaN(req.params.long) && isNaN(req.params.unit)){
      let r = req.params
      let coords = [r.lat,r.long,r.unit]
      await helpers.getWeather(coords)
      .then((data)=>res.send(data))
   }else{
      res.status(404).send('Error: You fucked up')
   }
}
async function getLocation(req,res){
   if(!isNaN(req.params.lat) && !isNaN(req.params.long)){
      let r = req.params
      let coords = [r.lat,r.long]
      await helpers.getLocation(coords)
      .then((data)=>res.send(data))
   }else{
      res.status(404).send('Error: You fucked up')
   }
}

module.exports={getWeather,getLocation};