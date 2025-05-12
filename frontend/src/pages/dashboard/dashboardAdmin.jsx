import React, { useEffect } from "react"
import Header from "../../components/header"
import Card from "../../components/card"
import editUser from "../../img/editUser.png"
import seeUsers from "../../img/seeUsers.png"
import seeOrders from "../../img/seeOrders.png"
import createUser from "../../img/createUser.png"
import { useNavigate } from "react-router-dom"

const DashboardAdmin = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            alert("No estás autenticado.")
            return navigate("/login")
        }

        try {
            const payload = JSON.parse(atob(token.split('.')[1]))
            if (payload.role !== "Admin") {
                alert("Acceso denegado: no tienes permisos de administrador.")
                return navigate("/halcon-user")
            } else if(!payload) {
                alert("Acceso denegado: no tienes permisos de administrador.")
                return navigate("/halcon-user")
            }
        } catch (error) {
            console.error("Token inválido", error)
        }
    }, [navigate])

    return (
        <>
            <Header/>
            <h1>WELCOME Admin</h1>
            <div className="cards">
                <Card 
                    link = "/halcon-user/dashboard-admin/create-user"
                    img = {createUser}
                    role = "CREATE" 
                    description = "Aqui estara la descripcion de create">
                </Card>

                <Card 
                    link = "/halcon-user/dashboard-admin/edit-user"
                    img = {editUser}
                    role = "EDIT" 
                    description = "Aqui estara la descripcion de edit">
                </Card>

                <Card 
                    link = "/halcon-user/dashboard-admin/see-user"
                    img = {seeUsers}
                    role = "SEE USERS" 
                    description = "Aqui estara la descripcion see users">
                </Card>

                <Card 
                    link = "/halcon-user/dashboard-admin/see-order"
                    img = {seeOrders}
                    role = "SEE ORDERS" 
                    description = "Aqui estara la descripcion see orders">
                </Card>
            </div>
        </>
    )
}

export default DashboardAdmin