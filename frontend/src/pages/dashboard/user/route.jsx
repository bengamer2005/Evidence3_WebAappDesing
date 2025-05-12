import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../../components/header"
import Order from "../../../hooks/getOrder"
import ReturnButton from "../../../components/returnButton"
import UploadImg from "../../../components/uploadImg"
import "../../../styles/route.css"
const RouteUser = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            alert("No estás autenticado.")
            return navigate("/login")
        }

        try {
            const payload = JSON.parse(atob(token.split('.')[1]))
            if (payload.role === "Route") {
                return null
            } else {
                alert("Acceso denegado: no tienes permisos de administrador.")
                return navigate("/halcon-user/dashboard-user")
            }
        } catch (error) {
            console.error("Token inválido", error)
        }
    }, [navigate])

    const handleStatus = async (order) => {
        try {
            const response = await fetch("https://evidence3-webaappdesing.onrender.com/halcon/changeStatusInDelivered", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ clientNum: order.clientNum }) 
            })

            if(!response.ok) {
                return alert("Fail to change the status")
            }

            const result = await response.json()
            alert("Status change")

            window.location.reload()
        } catch (error) {
            console.error("Error actualizando el status", error)
        }
    }

    return (
        <>
            <main>
                <Header/>
                <ReturnButton link="/halcon-user/dashboard-user"></ReturnButton>
                <h1>ROUTE</h1>
                <p>este sera el apartado de route, falta: form</p>
                <Order endpont={"getInRoute"} change={handleStatus}/>

                <div className="upload-wrapper">
                    <UploadImg />
                    <UploadImg />
                </div>
            </main>
        </>
    )
}

export default RouteUser