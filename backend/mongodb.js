const mongoose = require('mongoose')

const connectDB = ()=> mongoose.connect(process.env.MONGODB_ATLAS_URI)
.then(()=> console.log('DB Connected'))
.catch(console.error)

module.exports = connectDB
