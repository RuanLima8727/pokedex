const express = require('express')
const server = express()
const cors = require('cors')
server.use(cors())
server.use(express.json())

server.listen(3001, ()=> {console.log("API online")
})

const routes = require('./routes/routes')
server.use('/pokedex', routes)