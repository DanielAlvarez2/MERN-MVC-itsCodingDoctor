const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const connectDB = require('./mongodb.js')

dotenv.config({path:'../.env'})

app.use(express.json()) //allows req, res to use JSON data
app.use(cors())

connectDB()

app.listen(5001, ()=>{
    console.log('Server running on port 5001')
})

