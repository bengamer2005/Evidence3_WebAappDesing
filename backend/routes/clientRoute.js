const express = require("express")
const router = express.Router()
const verifyToken = require("../middleware/auth.jwt")
const {getOrder, postOrder, getOrders, getOneOrder} = require("../controllers/clientController")

router.route("/order/login").post(getOrder)
router.route("/order/create").post(postOrder)
router.route("/getOrder").get(getOrders)
router.get("/getOneOrder", verifyToken, getOneOrder)

module.exports = router