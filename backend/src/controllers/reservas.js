const Reserva = require('../models/reservas')


const newReserva = async (reqest, response) => {
    try {
        const reserva = reqest.body
        const newReserva = await Reserva.create(reserva)

        return response.json({
            success: true,
            data: newReserva
        })
    } catch (error) {
        console.log(error);
        return response.json({
            success: false,
            message: error.message
        })
    }


}

const buscarReserva = async (reqest, response) => {
    const { id } = reqest.body

    if (!id) {
        return response.status(400).json({
            success: false,
            menssage: 'No se proporciono el Id'
        })
    }
    const reserva = await Reserva.findById(id)
    console.log(reserva)
    response.json({
        success: true,
        menssage: "Reserva no encontrada con exito",
        data: reserva
    })

}

const getReserva = async (reqest, response) => {
    const reserva = await Reserva.find()
    console.log(reserva)
    response.json({
        success: true,
        data: reserva
    })

}

const modificarReserva = async (request, response) => {
    const newValues = request.body;
    try {
        const updateReserva = await Reserva.findByIdAndUpdate(request.params.id, newValues)
        return response.json({
            success: true,
            data: updateReserva,
            message: "Reserva modificada con exito"
        })
    } catch (error) {
        console.log(error);
        return response.json({
            success: false,
            message: error.message
        })
    }
}

const eliminarReserva = async (reqest, response) => {
    try {
        const deleteReserva = await Reserva.findByIdAndDelete(reqest.params.id)
        return response.json({
            success: true,
            data: deleteReserva,
            message: "Reserva eliminada con exito"
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
    newReserva,
    buscarReserva,
    getReserva,
    modificarReserva,
    eliminarReserva
    
}