<<<<<<< HEAD
const express = require('express')
const connectDB = require('./config/database')
const router = require('./config/routes')
const cors= require('cors')

const app = express()
const port = 3020

// connect to mongo database
connectDB() 
app.use(cors())
// express to parse json
app.use(express.json())
app.use('/', router)
app.listen(port, () => {
    console.log('listening on port', port)
=======
const express = require('express')
const connectDB = require('./config/database')
const router = require('./config/routes')
const cors= require('cors')

const app = express()
const port = 3020

// connect to mongo database
connectDB() 
app.use(cors())
// express to parse json
app.use(express.json())
app.use('/', router)
app.listen(port, () => {
    console.log('listening on port', port)
>>>>>>> 9078d435521b23e68534b8e5a763da71e383529a
})