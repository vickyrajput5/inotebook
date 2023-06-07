const express = require("express")
const connetToMongo = require("../db/config")
connetToMongo();
const app = express()
const Port = process.env.PORT || 4000;
// available routes

app.use("/api/auth", require("../router/auth"));

app.listen(Port , ()=>{
    console.log(`Listing port is ${Port}`)
})