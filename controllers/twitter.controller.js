const Twitter = require('../models/Twitter.model')


module.exports.twitterController = {
    postTwitter: (req, res) => {
        Twitter.create({
            text: req.body.text
            
        }).then((data) => {
            res.json(data)
        })
    },
    deleteTwitter: (req, res) => {
        Twitter.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })
    },
    getTwitter: (req, res) => {
        Twitter.find().then((data) => {
            res.json(data)
        })
    },
    getTwitterId: (req, res) => {
        Twitter.findById(req.params.id).then((data) => {
            res.json(data)
        })
    },
    patchLikes: async (req, res) => {
        const data = await Twitter.findByIdAndUpdate(req.params.id, {$push: {likes: req.body.likes}}).then((data) => {
            res.json(data)
        })
    }
}