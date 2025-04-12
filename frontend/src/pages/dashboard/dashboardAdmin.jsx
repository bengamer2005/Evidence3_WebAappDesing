import React from "react"
import Header from "../../components/header"
import Card from "../../components/card"

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
                    img = "https://raw.githubusercontent.com/bengamer2005/Evidence3_WebAappDesing/refs/heads/main/img/editUser.png?token=GHSAT0AAAAAAC65LQZPU6P66HDIAO2IPBDGZ72VT6Q"
                    role = "EDIT" 
                    description = "Aqui estara la descripcion de edit">
                </Card>

                <Card 
                    link = "/halcon-user/dashboard-admin/see-user"
                    img = "https://raw.githubusercontent.com/bengamer2005/Evidence3_WebAappDesing/refs/heads/main/img/seeOrders.png?token=GHSAT0AAAAAAC65LQZOVSWAMBHXB2JEOBIOZ72VUUA"
                    role = "SEE USERS" 
                    description = "Aqui estara la descripcion see users">
                </Card>

                <Card 
                    link = "/halcon-user/dashboard-admin/see-order"
                    img = "https://raw.githubusercontent.com/bengamer2005/Evidence3_WebAappDesing/refs/heads/main/img/seeUsers.png?token=GHSAT0AAAAAAC65LQZONB66XCOD3NULT4ZGZ72VU5A"
                    role = "SEE ORDERS" 
                    description = "Aqui estara la descripcion see orders">
                </Card>
            </div>
        </>
    )
}

export default DashboardAdmin