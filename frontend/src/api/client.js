import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:3002/api'
})

export default client