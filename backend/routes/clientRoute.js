const express = require("express")
const router = express.Router()

const {getOrder, postOrder, getOrders} = require("../controllers/clientController")

router.route("/order/login").post(getOrder)
router.route("/order/create").post(postOrder)
router.route("/getOrder").get(getOrders)

module.exports = router