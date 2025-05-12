const express = require("express")
const router = express.Router()
const verifyToken = require("../middleware/auth.jwt")
const {getOrders, getOneOrder, getInOrder, getInProcess} = require("../controllers/clientController")

router.route("/getOrder").get(getOrders)
router.get("/getOneOrder", verifyToken, getOneOrder)
router.route("/getInOrder").get(getInOrder)
router.route("/getInProcess").get(getInProcess)

module.exports = router