const {Router} = require("express")
const {twitterController} = require("../controllers/twitter.controller")
const router = Router()

router.post('/twitter', twitterController.postTwitter)
router.delete('/twitter/:id', twitterController.deleteTwitter)
router.get('/twitter', twitterController.getTwitter)
router.get('/twitter/:id', twitterController.getTwitterId)
router.patch("/twitter/:id", twitterController.patchLikes)





module.exports = router