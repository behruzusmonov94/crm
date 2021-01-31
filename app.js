const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth')
const analyticsRouter = require('./routes/analytics')
const categoryRouter = require('./routes/category')
const orderRouter = require('./routes/order')
const positionRouter = require('./routes/position')
const app = express()

mongoose.connect('')
    .then(() => {console.log('mongoDB connected.');})
    .catch(error => console.log(error);)

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())


app.use('/api/auth', authRouter)
app.use('/api/analytics', analyticsRouter)
app.use('/api/category', categoryRouter)
app.use('/api/order', orderRouter)
app.use('/api/position', positionRouter)


module.exports = app