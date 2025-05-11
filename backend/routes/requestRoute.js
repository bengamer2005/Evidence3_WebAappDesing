const express = require("express")
const router = express.Router()

const {postRequest, getRequest, updateStatus} = require("../controllers/requestController")

router.route("/request/post").post(postRequest)
router.route("/request/get").get(getRequest)
router.route("/request/updateStatus").post(updateStatus)

module.exports = router