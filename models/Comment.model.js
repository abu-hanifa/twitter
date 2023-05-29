const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    text: String,
    twittComment: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Twitter'
    }

})



const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment