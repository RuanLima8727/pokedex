const express = require('express')
const server = express()
server.use(express.json())

server.listen(5001, ()=> {
})

const routes = require('./routes/routes')
server.use('/pokedex', routes)