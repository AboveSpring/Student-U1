const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Student = new Schema(
  {
    email: {
      type: String,
      unique: true,
      validator: function (v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      },
    },
    name: String,
    address: {
      street: {
        type: String,
        unique: true
      },
      zipcode: Number,
      city: String,
    }
  })

module.exports = mongoose.model('student', Student)