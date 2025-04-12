import React from "react"
import Header from "../../components/header"
import Card from "../../components/card"

const DashboardUser = () => {
    return (
        <>
            <main>
                <Header/>
                <h1>WELCOME Users</h1>
                <div className="cards">
                    <Card 
                        link = "/halcon-user/dashboard-user/sales"
                        img = "https://st3.depositphotos.com/1001335/14944/i/450/depositphotos_149444160-stock-illustration-materials-for-construction-3d-illustration.jpg"
                        role = "SALES" 
                        description = "Aqui estara la descripcion de sales">    
                    </Card>

                    <Card 
                        link = "/halcon-user/dashboard-user/purchasing"
                        img = "https://images.adsttc.com/media/images/5ea0/a3ce/b357/65f0/d600/00d8/newsletter/shutterstock_1185452806.jpg?1587585977"
                        role = "PURCHASING" 
                        description = "Aqui estara la descripcion de purchasing">
                    </Card>

                    <Card 
                        link = "/halcon-user/dashboard-user/warehouse"
                        img = "https://www.microtech.es/hubfs/Fotos%20blog/automatizacion_compras_materiales-1.jpg"
                        role = "WAREHOUSE" 
                        description = "Aqui estara la descripcion warehouse">
                    </Card>

                    <Card 
                        link = "/halcon-user/dashboard-user/route"
                        img = "https://img.freepik.com/fotos-premium/camion-carroceria-totalmente-cargada-bloques-hormigon-cemento_165577-3056.jpg"
                        role = "ROUTE" 
                        description = "Aqui estara la descripcion route">
                    </Card>
                </div>
            </main>
        </>
    )
}

export default DashboardUser