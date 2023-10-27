const {Router} = require('express')
const {login, signUp} = require('../controllers/auth')

function auth(app){
    const router = Router()
    app.use('/auth', router )

    router.post('/login', login)
    router.post('/singUp', signUp)
}

module.exports = auth