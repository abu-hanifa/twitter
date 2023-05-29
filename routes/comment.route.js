const {Router} = require("express")
const {commentController} = require('../controllers/comment.controller')
const router = Router()

router.post('/comment',commentController.postComment)
router.delete('/comment/:id',commentController.deleteComment)
router.post('/comment/twitter/:id', commentController.postCommentTwitter)
router.get('/comment/twitter/:id', commentController.getCommentTwitter)





module.exports = router