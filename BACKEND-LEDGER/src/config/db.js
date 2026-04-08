const mongoose = require("mongoose")




function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)

    .then(()=>{
        console.log("Server is connected to DB");
    })

    .catch(err=>{
        console.log("server is not connected to DB",err)
        process.exit(1)
    })
}


module.exports = connectToDb