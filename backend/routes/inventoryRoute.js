const express = require("express")
const router = express.Router()

const { addUnit, postProduct, subtractUnit } = require("../controllers/inventoryController")

router.route("/inventory/productAdd/:productId").post(addUnit)
router.route("/inventory/create").post(postProduct)
router.route("/inventory/productSubtract/:productId").post(subtractUnit)

module.exports = router