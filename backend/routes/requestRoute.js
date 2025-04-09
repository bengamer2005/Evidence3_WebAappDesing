const express = require("express")
const router = express.Router()

const {postRequest, getRequest} = require("../controllers/requestController")

router.route("/request/post").post(postRequest)
router.route("/request/get").get(getRequest)


module.exports = router