const express = require("express")
const router = express.Router()

const {getUser, postUser, putUser, deleteUser, getUsers} = require("../controllers/userController")

router.route("/user/login").post(getUser)
router.route("/user/create").post(postUser)
router.route("/user/update/:id").put(putUser)
router.route("/user/delete/:id").delete(deleteUser)
router.route("/user/getUsers").get(getUsers)

module.exports = router