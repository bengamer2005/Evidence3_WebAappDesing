const mongoose = require("mongoose")
const randomNum = Math.floor(1 + Math.random() * 99)

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String
    },
    productUnit: {
        type: Number,
        default: randomNum
    },
    productId: {
        type: String
    }
})

ProductSchema.pre("save", function(next) {
    if(!this.productId) {
        const firstWord = this.productName.split(' ')[0].toUpperCase()
        this.productId = `HALCON-${firstWord}-${randomNum}`
    }
    next()
})

module.exports = mongoose.model("Product", ProductSchema)