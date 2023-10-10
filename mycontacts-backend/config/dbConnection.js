const mongoose = require("mongoose")

const connectDb = async () => {
    try{
        const connect  = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(`MongoDB connected: ${connect.connection.host}`)
    }catch(err){
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDb