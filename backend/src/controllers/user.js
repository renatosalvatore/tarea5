const User = require('../models/user')


const newUser = async (reqest, response) => {
    try {
        const user = reqest.body
        const newUser = await User.create(user)

        return response.json({
            success: true,
            data: newUser
        })
    } catch (error) {
        console.log(error);
        return response.json({
            success: false,
            message: error.message
        })
    }


}

const buscarUser = async (reqest, response) => {
    const { id } = reqest.body

    if (!id) {
        return response.status(400).json({
            success: false,
            menssage: 'No se proporciono el Id'
        })
    }
    const user = await user.findById(id)
    console.log(user)
    response.json({
        success: true,
        menssage: "Usuario no encontrada con exito",
        data: user
    })

}

const getUser = async (reqest, response) => {
    const user = await User.find()
    console.log(user)
    response.json({
        success: true,
        data: user
    })

}

const modificarUser = async (request, response) => {
    const newValues = request.body;
    try {
        const updateUser = await Reserva.findByIdAndUpdate(request.params.id, newValues)
        return response.json({
            success: true,
            data: updateUser,
            message: "Usuario modificado con exito"
        })
    } catch (error) {
        console.log(error);
        return response.json({
            success: false,
            message: error.message
        })
    }
}

const eliminarUser = async (reqest, response) => {
    try {
        const deleteReserva = await Reserva.findByIdAndDelete(reqest.params.id)
        return response.json({
            success: true,
            data: deleteReserva,
            message: "Usuario eliminado con exito"
        })
    } catch (error) {
        console.log(error);
        return response.json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    newUser,
    buscarUser,
    getUser,
    modificarUser,
    eliminarUser
    
}