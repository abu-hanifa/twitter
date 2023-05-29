const User = require('../models/User.model')


module.exports.userController = {
    postUser: (req, res) => {
        User.create({
            name: req.body.name
        }).then((data) => {
            res.json(data)
        })
    },
    deleteUser: (req, res) => {
        User.findByIdAndRemove(req.params.id).then((data) => {
            res.json(data)
        })
    },
    getUser: (req, res) => {
        User.find().then((data) => {
            res.json(data)
        })
    },
    getUserId: (req, res) => {
        User.findById(req.params.id).then((data) => {
            res.json(data)
        })
    },
    patchSaves: async (req, res) => {
        const data = await User.findByIdAndUpdate(req.params.id, {$push: {saves: req.body.saves}}).then((data) => {
            res.json(data)
        })
    }
}