require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')
//!route paths
const apiRouter=require('./routes/api')

//!routes declarations
app.use('/api', apiRouter)

//!middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())


app.listen(3001,()=>console.log('listening on port 3001'))