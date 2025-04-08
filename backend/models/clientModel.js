const mongoose = require("mongoose")
const year = new Date().getFullYear()
const randomNum = Math.floor(100 + Math.random() * 899)

const randomInovice = () => {
    return `HALCON-${year}-${randomNum}`
}

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    taxInfo: {
        type: String,
    },
    state: {
        type: String,
    },
    city: {
        type: String,
    },
    street: {
        type: String,
    },
    productNotes: {
        type: String,
    },
    clientNum: {
        type: String
    },
    invoiceNum: {
        type: String,
        default: randomInovice
    },
    status: {
        type: String,
        enum: ["In Order", "In Process", "In Route", "In Delivered"],
        default: "In Order"
    },
    active: {
        type: Boolean,
        default: true 
    }
})

ClientSchema.pre("save", function(next) {
    if(!this.clientNum) {
        const firstWord = this.name.split(' ')[0].toUpperCase()
        this.clientNum = `HALCON-${firstWord}-${year}-${randomNum}`
    }
    next()
})

module.exports = mongoose.model("Client", ClientSchema)