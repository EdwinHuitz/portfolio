const data = require('../controllers/data')
const express = require('express');
const router = express.Router();

router.get('/:long&:lat&:unit',data.getWeather)
router.get('/:long&:lat',data.getLocation)
router.get('/',(req,res)=>res.status(418).send('ERROR: coffee not found'))
module.exports = router;