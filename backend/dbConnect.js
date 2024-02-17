const mongoose = require("mongoose")
require("dotenv").config()

const url = process.env.MONGO_DB_URI

const getConnection = async()=>{
    await mongoose.connect(url)
}

module.exports = getConnection

