const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    username: {
        type: String
    },
    role: {
        type: String,
        enum: ['Sales', 'Purchasing', 'Warehouse', 'Route', 'Admin']
    },
    active: {
        type: Boolean,
        default: true
    },
    dateCreated: {
        type: Date,
        default: Date.now 
    }
})

module.exports = mongoose.model("User", UserSchema)
