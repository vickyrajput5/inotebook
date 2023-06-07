const mongoose = require("mongoose");
const mongoURL = "mongodb+srv://waqarmuhammad337:4090475Ws@cluster0.bjiyacm.mongodb.net/inotebook";
const connetToMongo = () =>{
    mongoose.connect(mongoURL).then(()=>{
        console.log("connection successfull")
    }).catch(()=>{
        console.log("no connection")
    })
}
module.exports = connetToMongo;