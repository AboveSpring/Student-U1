const express = require('express')
const cors = require('cors')

const db = require('./db')
const studentRouter = require('./routes/students-routes')

const app = express()
const apiPort = process.env.port || 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/', studentRouter)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))