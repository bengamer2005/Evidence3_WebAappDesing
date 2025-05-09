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
// admin
import CreateUser from "./pages/dashboard/admin/create"
import EditUser from "./pages/dashboard/admin/edit"
import SeeUsers from "./pages/dashboard/admin/seeUsers"
import SeeOrders from "./pages/dashboard/admin/seeOrders"
// client
import Client from "./pages/client/clientView"

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
            {/* Rutas para las cards de los admin */}
            <Route path="/halcon-user/dashboard-admin/create-user" element={<CreateUser/>}/>
            <Route path="/halcon-user/dashboard-admin/edit-user" element={<EditUser/>}/>
            <Route path="/halcon-user/dashboard-admin/see-user" element={<SeeUsers/>}/>
            <Route path="/halcon-user/dashboard-admin/see-order" element={<SeeOrders/>}/>
            {/* Rutas para los clients */}
            <Route path="/halcon-client" element={<Client/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App