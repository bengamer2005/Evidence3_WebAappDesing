import React from "react"
import {BrowserRouter, Routes, Route} from "react-router"
import UserViews from "./pages/landingpage/userView"
import ClientView from "./pages/landingpage/clientView"
import DashboardUser from "./pages/dashboard/dashboardUser"
import DashboardAdmin from "./pages/dashboard/dashboardAdmin"


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ClientView/>}/>
            <Route path="/halcon-user" element={<UserViews/>}/>
            <Route path="/halcon-user/dashboard-user" element={<DashboardUser/>}/>
            <Route path="/halcon-user/dashboard-admin" element={<DashboardAdmin/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App