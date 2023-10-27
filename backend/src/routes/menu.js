const {Router} = require('express')
const menu = require('../controllers/menu')

function menu(app){
    const router = Router()
    app.use('/menu', router )

    router.get('/', (req, res)=>{
        return res.json({
            success: true
        })
    })
}

module.exports = menu