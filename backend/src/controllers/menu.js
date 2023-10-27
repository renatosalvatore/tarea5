const mongoose = require ('mongoose')

const menuSchema = new mongoose.Schema(
    {

nombre : {type: String, require: true},
descripcion : {type: String,
require: [true, ' Se requiere descripcion del producto'],
length: [30,'debe ser máximo 30 char']},
img : File,
precio : Number,
categories:[{
    type: mongoose.Schema.Types.ObjectId,
        }]
    }
)

const Menu =mongoose.mode('menu', menuSchema)

module.exports = Menu;