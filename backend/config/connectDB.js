const mongoose = require("mongoose")
const Usuario = require("../models/userModel")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/evidencia_3", {})
        .then(() => console.log("MongoDB conectado"))
        .catch(error => console.error("Error de conexión:", error))

        async function Admin() {
            try {
                const existeAdmin = await Usuario.findOne({role: "Admin"})

                if(!existeAdmin){
                    const nuevoAdmin = new Usuario({
                        email: "admin@admin",
                        password: "123123",
                        username: "Erick Estrada",
                        role: "Admin"
                    })

                    const resultado = await nuevoAdmin.save()
                    console.log("Admin guardado: ", resultado)
                } else {
                    console.log("Admin ya fue creado antes")
                }
            } catch (error) {
                console.error("Error al guardar el Admin", error)
            }
        }

        Admin()

    } catch (error) {
        console.error("Error al conectar a la DB", error.message)
    }
}
module.exports = connectDB