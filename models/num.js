const mongoose = require('mongoose')

const numSchema = new mongoose.Schema({
    number1 :{type : Number, required : true},
    number2 :{type : Number, required : true}
})
module.exports = mongoose.model('num', numSchema)