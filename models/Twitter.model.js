const mongoose = require("mongoose")

const twitterSchema = mongoose.Schema({
    text: String,
    likes: [{type: mongoose.SchemaTypes.ObjectId, ref: 'User'}]
    

})


const Twitter = mongoose.model('Twitter', twitterSchema)
module.exports = Twitter