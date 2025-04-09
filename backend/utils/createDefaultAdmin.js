const User = require("../models/userModel")

const defaultAdmin = async (req, res) => {
    try {
        const existAdmin = await User.findOne({ role: "Admin" })

        if(!existAdmin) {
            const newAdmin = new User({
                email: "admin@admin",
                password: "123123",
                username: "Erick Estrada",
                role: "Admin"
            })

            const admin = await newAdmin.save()
            console.log("Admin created: ", admin)
        } else {
            console.log("Admin already exists")
        }
    } catch (error) {
        console.error("Error creating Admin: ", error)
    }
}

module.exports =  defaultAdmin