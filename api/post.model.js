const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Product = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
},{
  collection: 'products'
})

module.exports = mongoose.model('Product', Product)