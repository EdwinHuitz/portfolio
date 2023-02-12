// require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')
const http = require('http')
// const fs = require('fs')
// const https = require('https')
// const cCert = fs.readFileSync('cert.txt','utf8')
// const cKey = fs.readFileSync('key.txt','utf8')
// const credentials={key:cKey,cert:cCert}
// const httpsServer = https.createServer(credentials,app)
const httpServer = http.createServer(app)
const port= 9001
const devMode=true

import {
   SecretsManagerClient,
   GetSecretValueCommand,
 } from "@aws-sdk/client-secrets-manager";
 
 const secret_name = "portfolio_env";
 
 const client = new SecretsManagerClient({
   region: "us-east-1",
 });
 
 let response;
 
 try {
   response = await client.send(
     new GetSecretValueCommand({
       SecretId: secret_name,
       VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
     })
   );
 } catch (error) {
   // For a list of exceptions thrown, see
   // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
   throw error;
 }
 
 const secret = response.SecretString;
 
 // Your code goes here

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
httpServer.listen(port,()=>'')
// httpsServer.listen(port,()=>console.log('listening on port '+port))