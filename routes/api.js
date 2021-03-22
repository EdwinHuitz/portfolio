const data = require('../controllers/data');
const mailer = require('../controllers/mailer')
const express = require('express');
const router = express.Router();

router.get('/',async (req,res)=>{
   //console.log(req.query)
   let q=req.query
   let rep//=await data.getWeather(q)
   switch(q.data){
      case "weather":rep=await data.getWeather(q);break
      case "location":rep=await data.getLocation(q);break
      default:res.status(400).send("ERROR: invalid dataset")
   }
   res.send(rep)
})
router.post('/:mail',mailer)
router.all('/*',(req,res)=>res.status(418).send('ERROR: coffee not found!'))
module.exports = router;