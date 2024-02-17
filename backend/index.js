const express = require("express")
const getConnection = require("./dbConnect")
require("dotenv").config()
getConnection()

const app = express()
const PORT = process.env.PORT || 3001

app.get("/",(req,res)=>{
    res.send("hii")
})

app.listen(PORT,()=>{
    console.log(`server running in port ${PORT}`)
})