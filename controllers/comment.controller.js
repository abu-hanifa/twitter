const Comment = require('../models/Comment.model')


module.exports.commentController = {
    postComment: (req, res) => {
        Comment.create({
            text: req.body.text
        }).then((data) => {
            res.json(data)
        })
    },
    deleteComment: (req, res) => {
        Comment.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })
    },
    postCommentTwitter: (req, res) => {
        Comment.create({
            text: req.body.text,
            twittComment: req.params.id
        }).then((data) => {
            res.json(data)
        })
    },
    getCommentTwitter: (req, res) => {
        Comment.find({twittComment: req.params.id}).populate('twittComment').then((data) => {
            res.json(data)
        })
    }

    //вывод комментарий к определенному твиту
}