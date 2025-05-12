const express = require("express")
const cors = require("cors")
const userRoute = require("./routes/userRoute")
const clientRoute = require("./routes/clientRoute")
const inventoryRoute = require("./routes/inventoryRoute")
const requestRoute = require("./routes/requestRoute")
const ordersRoute = require("./routes/ordersRoute")
// CONEXION A LA DB Y CREACION DE ADMIN Y PRODUCTOS
const connectDB = require("./config/connectDB")
const defaultAdmin = require("./utils/createDefaultAdmin")
const defaultProducts = require("./utils/createDefaultProduct")
connectDB()
defaultAdmin()
defaultProducts()

const app = express()
app.use(express.json())

// CONECTA MI FRONTEND CON MI BACKEND, Y PERMITE LAS PETICIONES
app.use(cors({
    origin: "https://evidence3-webaappdesing-frontend.onrender.com"
}))

// SE ASIGNA PUERTO PARA EL BACKEND
// const port = 3000
// app.listen(port, () => {
//     console.log(`Servidor corriendo en http://localhost:${port}/halcon-client`)
// })

// RUTAS
app.use("/halcon", userRoute)
app.use("/halcon", clientRoute)
app.use("/halcon", inventoryRoute)
app.use("/halcon", requestRoute)
app.use("/halcon", ordersRoute)