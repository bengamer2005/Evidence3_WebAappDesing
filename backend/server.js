const express = require("express")
const paths = require("./config/path")
const userRoute = require("./routes/userRoute")
const clientRoute = require("./routes/clientRoute")
const inventoryRoute = require("./routes/inventoryRoute")
// CONEXION A LA DB Y CREACION DE ADMIN Y PRODUCTOS
const connectDB = require("./config/connectDB")
const defaultAdmin = require("./utils/createDefaultAdmin")
const defaultProducts = require("./utils/createDefaultProduct")
connectDB()
defaultAdmin()
defaultProducts()

const app = express()
app.use(express.json())

const port = 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}/halcon-client`)
})

// RUTAS
app.use("/halcon", userRoute)
app.use("/halcon", clientRoute)
app.use("/halcon", inventoryRoute)

// SCRIPTS
app.use("/", express.static(paths.LandingPageScripts))
app.use("/", express.static(paths.dashboardScript))

// LANDINGPAGE
app.get("/halcon-client", (req, res) => {
    res.sendFile(paths.halconClient)
})

app.get("/halcon-user", (req, res) => {
    res.sendFile(paths.halconUser)
})

// DASHBOARD
app.get("/halcon-user/dashboard", (req, res) => {
    res.sendFile(paths.dashboard)
})

app.get("/halcon-user/dashboard/admin", (req, res) => {
    res.sendFile(paths.dashboardAdmin)
})

app.get("/halcon-user/dashboard/sales", (req, res) => {
    res.sendFile(paths.dashboardSales)
})

app.get("/halcon-user/dashboard/purchasing", (req, res) => {
    res.sendFile(paths.dashboardPurchasing)
})

app.get("/halcon-user/dashboard/warehouse", (req, res) => {
    res.sendFile(paths.dashboardWarehouse)
})

app.get("/halcon-user/dashboard/route", (req, res) => {
    res.sendFile(paths.dashboardRoute)
})