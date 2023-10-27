const mongoose = require('mongoose')
require ('dotenv').config()

const connect = async ()=>{
    //const connection = await mongoose.connect(`mongodb+srv://renatrix:mongodb..@ucamp.mavemyl.mongodb.net/?retryWrites=true&w=majority`)
    const connection = await mongoose.connect(process.env.MONGO_URL)
    console.log('Se ha conectado correctamente:', connection.connection.host)
}

module.exports = connect