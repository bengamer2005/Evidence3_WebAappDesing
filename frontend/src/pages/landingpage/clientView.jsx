import React from "react"
import { Link } from "react-router"
import Header from "../../components/header"

const ClientView = () => {
    return (
        <>
            <Header/>
            <main>
                <form id="form" className="form">
                    <span className="title">PEDIDOS</span>
                    <span className="subtitle"> Checa tus pedidos con tu informacion</span>

                    <div className="form-container">
                        <input type="text" id="id_cliente" className="numCliente" placeholder="Client ID: HALCON-123123"/>
                        <input type="text" id="num_factura" className="NumFactura" placeholder="Inoice: HALCON-123-123"/>
                    </div>

                    <button type="submit" id="submit" className="submit">SUBMIT</button>
                    <p id="error-message" className="error-message"></p>

                    <p className="sign-up-label">
                        You´re a user? <Link to="/halcon-user">USERS</Link>
                    </p>
                </form>
            </main>
        </>
    )
}

export default ClientView