const express = require('express')
const route  = require('./Route')
const { connection } = require('./db')
const app = express()


app.use('/', route)

app.listen(5080,()=>{
    connection()
    console.log("server started")
})