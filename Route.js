const express = require('express')
const { databaseName } = require('./db')
const route = express.Router()

 const collection = databaseName.collection("Employee")

route.get('/taskOne',async (req,res)=>{
   const taskOne =await collection.find().toArray()
   return res.send(taskOne)
})

route.get('/taskTwo',async (req,res)=>{
    const taskTwo =await collection.find({"salary":{$gt:"30000"}}).toArray()
    return res.send(taskTwo)
 })
 
 route.get('/taskThree',async (req,res)=>{
    const taskThree =await collection.find({"overallExp":{$gt:"1"}}).toArray()
    return res.send(taskThree)
 })

route.get('/taskFour',async (req,res)=>{
    const taskFour =await collection.find({"yearGrad":{$gt:"2015"},"overallExp":{$gt:"1"}}).toArray()
    return res.send(taskFour)
 })

route.get('/taskFive',async (req,res)=>{
    const taskFive =await collection.updateMany({salary:{$gt:"30000"}},{$set:{salary:"35000"}})
    return res.send(taskFive)
 })

 route.get('/taskSix',async (req,res)=>{
    const taskSix =await collection.deleteMany({lastCompany:"Y"})
    return res.send(taskSix)
 })


module.exports = route