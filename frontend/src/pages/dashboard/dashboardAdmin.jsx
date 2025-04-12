import React from "react"
import Header from "../../components/header"
import Card from "../../components/card"
import editUser from "../../img/editUser.png"
import seeUsers from "../../img/seeUsers.png"
import seeOrders from "../../img/seeOrders.png"

const DashboardAdmin = () => {
    return (
        <>
            <Header/>
            <h1>WELCOME Admin</h1>
            <div className="cards">
                <Card 
                    link = "/halcon-user/dashboard-admin/create-user"
                    img = "https://www.evirtualplus.com/wp-content/uploads/2021/07/como-crear-manualmente-usuarios-en-moodle.png"
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