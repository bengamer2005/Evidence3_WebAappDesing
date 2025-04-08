const path = require("path")

// Scripts 
//          Landingpage
const LandingPageScripts = path.join(__dirname,"..", "src", "script", "landingPage")
const dashboardScript = path.join(__dirname,"..", "src", "script", "dashboard")

// Archivos estaticos para el inicio de sesion y busqueda de ordenes
const halconClient = path.join(__dirname, "..", "views", "landingPage", "clientView.html")
const halconUser = path.join(__dirname, "..", "views", "landingPage","userView.html")

// Archivo para que el cliente vea la orden
const clientOrder = path.join(__dirname, "..", "views", "client", "order.html")

// Archivo para el dashboard
const dashboard = path.join(__dirname, "..", "views", "dashboard", "dashboard.html")

const dashboardAdmin = path.join(__dirname, "..", "views", "dashboard", "admin.html")
const dashboardSales = path.join(__dirname, "..", "views", "dashboard", "sales.html")
const dashboardPurchasing = path.join(__dirname, "..", "views", "dashboard", "purchasing.html")
const dashboardWarehouse = path.join(__dirname, "..", "views", "dashboard", "warehouse.html")
const dashboardRoute = path.join(__dirname, "..", "views", "dashboard", "route.html")

module.exports = {
    LandingPageScripts,
    dashboardScript,
    halconClient,
    halconUser,
    clientOrder,
    dashboard,
    dashboardAdmin,
    dashboardSales,
    dashboardPurchasing,
    dashboardWarehouse,
    dashboardRoute
}