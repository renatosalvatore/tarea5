const mongoose = require("mongoose");

const reservaSchema = new mongoose.Schema(
    {
        
        nombre : String,
        email : String,
        fono : Number,
        fecha : String,
        fecha :  String,
        comensales : Number
    }
)

const Reserva = mongoose.model ('Reservas', reservaSchema)

module.exports = Reserva;