const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/evidencia_3", {})
        .then(() => console.log("\nMongoDB conectado\n"))
        .catch(error => console.error("Error de conexión:", error))

    } catch (error) {
        console.error("Error al conectar a la DB", error.message)
    }
}
module.exports = connectDB