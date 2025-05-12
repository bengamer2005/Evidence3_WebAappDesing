import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../../components/header"
import Request from "../../../hooks/getRequestProduct"
import ReturnButton from "../../../components/returnButton"

const Purchasing = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            alert("No estás autenticado.")
            return navigate("/login")
        }

        try {
            const payload = JSON.parse(atob(token.split('.')[1]))
            if (payload.role === "Purchasing") {
                return null
            } else {
                alert("Acceso denegado: no tienes permisos de administrador.")
                return navigate("/halcon-user/dashboard-user")
            }
        } catch (error) {
            console.error("Token inválido", error)
        }
    }, [navigate])

    return (
        <>
            <main>
                <Header/>
                <ReturnButton link="/halcon-user/dashboard-user"></ReturnButton>
                <h1>PURCHASING</h1>
                <p>este sera el apartado de purchasing, form</p>
                <Request/>
            </main>
        </>
    )
}

export default Purchasing