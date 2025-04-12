import React from "react"
import {BrowserRouter, Routes, Route} from "react-router"
// landingpages
import UserViews from "./pages/landingpage/userView"
import ClientView from "./pages/landingpage/clientView"
// dashboards
import DashboardUser from "./pages/dashboard/dashboardUser"
import DashboardAdmin from "./pages/dashboard/dashboardAdmin"
// users
import Purchasing from "./pages/dashboard/user/purchasing"
import Sales from "./pages/dashboard/user/sales"
import Warehouse from "./pages/dashboard/user/warehouse"
import RouteUser from "./pages/dashboard/user/route"


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* Rutas para la landingpage */}
            <Route path="/" element={<ClientView/>}/>
            <Route path="/halcon-user" element={<UserViews/>}/>
             {/* Rutas para los dashboards */}
            <Route path="/halcon-user/dashboard-user" element={<DashboardUser/>}/>
            <Route path="/halcon-user/dashboard-admin" element={<DashboardAdmin/>}/>
             {/* Rutas para las cards de los users */}
            <Route path="/halcon-user/dashboard-user/purchasing" element={<Purchasing/>}/>
            <Route path="/halcon-user/dashboard-user/sales" element={<Sales/>}/>
            <Route path="/halcon-user/dashboard-user/warehouse" element={<Warehouse/>}/>
            <Route path="/halcon-user/dashboard-user/route" element={<RouteUser/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App