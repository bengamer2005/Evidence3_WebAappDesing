const express = require("express")
const router = express.Router()
const {getOrder, postOrder, statusInProcess, statusInDelivered, statusInRoute} = require("../controllers/clientController")

router.route("/order/login").post(getOrder)
router.route("/order/create").post(postOrder)
router.post("/changeStatusInProcess", statusInProcess)
router.post("/changeStatusInDelivered", statusInDelivered)
router.post("/changeStatusInRoute", statusInRoute)

module.exports = router