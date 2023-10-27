const {expressjwt: expressJWT} = require('express-jwt')
//const { jwtKey } = require('../config'), la reemplazo por:
require('dotenv').config()

const getToken = (req)=>{
    const {authorization} = req.headers

    if(authorization){
        const [type, token] = authorization.split(' ') // ['Bearer', 'eyJH....']

        return type==='Bearer' || type==='Token' ? token : null
    }

    return null
}

const auth = expressJWT({
    secret: process.env.JWTKEY,
    algorithms: ['HS256'],
    userProperty: 'user',
    getToken
})

module.exports = auth