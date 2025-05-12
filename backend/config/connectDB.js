const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {})
        .then(() => console.log("\nMongoDB conectado\n"))
        .catch(error => console.error("Error de conexión:", error))

    } catch (error) {
        console.error("Error al conectar a la DB", error.message)
    }
}
module.exports = connectDB