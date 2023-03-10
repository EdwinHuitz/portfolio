require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')
const http = require('http')
// const fs = require('fs')
const https = require('https')
// const cCert = fs.readFileSync('cert.txt','utf8')
// const cKey = fs.readFileSync('key.txt','utf8')
// const credentials={key:cKey,cert:cCert}
const httpsServer = https.createServer(app)
const port= 8080
const devMode=true

//!route paths
const apiRouter=require('./routes/api')


//!middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())


//!routes declarations
app.use('/api', apiRouter)


devMode===true?
app.listen(port,()=>console.log('DEV MODE: listening on port '+port)):
httpsServer.listen(port);
// httpsServer.listen(port,()=>console.log('listening on port '+port))