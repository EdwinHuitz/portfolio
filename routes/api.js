const data = require('../controllers/data');
const mailer = require('../controllers/mailer')
const express = require('express');
const router = express.Router();

router.get('/:long&:lat&:unit',data.getWeather)
router.get('/:long&:lat',data.getLocation)
router.post('/:mail',mailer)
router.all('/*',(req,res)=>res.status(418).send('ERROR: coffee not found!'))
module.exports = router;