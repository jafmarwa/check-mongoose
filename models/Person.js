const mongoose = require('mongoose')

const PersonSchema = mongoose.Schema({
    name:{
     type: String,
     required: true,   
    },
    age: Number,
    favoriteFoods: [String]
}) 

module.exports = Person = mongoose.model('Person', PersonSchema)