const {Router} = require("express")
const {userController} = require("../controllers/user.controller")
const router = Router()

router.post('/user', userController.postUser)
router.delete('/user/:id', userController.deleteUser)
router.get('/user', userController.getUser)
router.get('/user/:id', userController.getUserId)
router.patch('/user/:id', userController.patchSaves)



module.exports = router