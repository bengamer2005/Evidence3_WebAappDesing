const mongoose = require("mongoose")

const RequestSchema = new mongoose.Schema({
    reqProduct: {
        type: String
    },
    reqUnit: {
        type: Number
    },
    reqNewProduct: {
        type: String
    },
    status:  {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model("Request", RequestSchema)