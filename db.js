const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017')

const connection= async ()=>{
    try{
        await client.connect()
        console.log("connected with db")
    }
    catch(err){
        console.log(err,"error")
    }
}

const databaseName = client.db("Human_Resource")

module.exports = {connection,databaseName}