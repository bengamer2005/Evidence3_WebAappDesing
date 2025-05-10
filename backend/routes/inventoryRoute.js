const express = require("express")
const router = express.Router()

const {addUnit, postProduct, subtractUnit, getProducts} = require("../controllers/inventoryController")

router.route("/inventory/productAdd/:id").post(addUnit)
router.route("/inventory/create").post(postProduct)
router.route("/inventory/productSubtract").post(subtractUnit)
router.route("/inventory/products").get(getProducts)

module.exports = router