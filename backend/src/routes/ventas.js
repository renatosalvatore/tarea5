const {Router} = require('express')
const ventas = require('../controllers/ventas')

function ventas(app){
    const router = Router()
    app.use('/ventas', router )

    router.get('/', (req, res)=>{
        return res.json({
            success: true
        })
    })
}

module.exports = ventas