const express = require('express')

const cookBookRoute = require('./routes/cookBookRoute.js')

const server = express()

server.use(express.json())

server.use('/api/recipes', cookBookRoute)


server.use('/', (req, res) => {
  res.send(`<h2>Api Home</h2>`)
})

module.exports = server
