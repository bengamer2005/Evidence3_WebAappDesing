import React, { useState } from "react"
import { Link } from "react-router"
import { useNavigate } from "react-router"
import Header from "../../components/header"
import Login from "../../services/loginClient"
import "../../styles/UserView.css"

const ClientView = () => {
    const [clientNum, setClientNum] = useState("")
    const [invoiceNum, setInvoiceNum] = useState("")
    const changePage = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()

        if(!clientNum || !invoiceNum) {
            return alert("All fields are require")
        }

        const result = await Login({clientNum, invoiceNum})

        if(result && result.token) {
            localStorage.setItem("token", result.token)
            console.log("Login exitoso, token: ", result.token)
            changePage("/halcon-client")
        } else {
            alert("Fail to login")
        }
    }
    
    return (
        <>
            <Header/>
            <main>
                <form id="form" className="form" onSubmit={handleLogin}>
                    <span className="title">PEDIDOS</span>
                    <span className="subtitle"> Checa tus pedidos con tu informacion</span>

                    <div className="form-container">
                        <input type="text" className="numCliente" placeholder="Client ID: HALCON-NAME-123-123" value={clientNum} onChange={(event) => setClientNum(event.target.value)}/>
                        <input type="text" className="NumFactura" placeholder="Inoice: HALCON-123-123" value={invoiceNum} onChange={(event) => setInvoiceNum(event.target.value)}/>
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