const express = require('express')
const cors = require('cors')

const db = require('./db')

const app = express()
const apiPort = 8000
const studentRouter = require('./routes/students-routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.use('/', studentRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))