const express = require("express")
const router = express.Router()
const verifyToken = require("../middleware/auth.jwt")
const {getOrders, getOneOrder, getInOrder, getInProcess, getInRoute} = require("../controllers/clientController")

router.route("/getOrder").get(getOrders)
router.get("/getOneOrder", verifyToken, getOneOrder)
router.route("/getInOrder").get(getInOrder)
router.route("/getInProcess").get(getInProcess)
router.route("/getInRoute").get(getInRoute)

module.exports = router