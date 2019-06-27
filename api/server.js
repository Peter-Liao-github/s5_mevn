const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 4000
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./DB.js')
const productRoute = require('./product.route')

mongoose.Promise = global.Promise
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('DB is connected') },
  err => { console.log('Cannot connect '+ err) }
)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/products', productRoute)

app.listen(PORT, ()=>{ console.log('server is running on port: ', PORT) })