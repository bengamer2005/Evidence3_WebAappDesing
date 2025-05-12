const express = require("express")
const router = express.Router()
const {getOrder, postOrder, statusInProcess} = require("../controllers/clientController")

router.route("/order/login").post(getOrder)
router.route("/order/create").post(postOrder)
router.post("/changeStatusInProcess", statusInProcess)

module.exports = router