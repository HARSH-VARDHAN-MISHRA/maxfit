const mongoose = require('mongoose')

exports.connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGOOURL)
        console.log("Database Connected Sucessfully")
    } catch (error) {
        console.log("Error : ",error)
    }
}