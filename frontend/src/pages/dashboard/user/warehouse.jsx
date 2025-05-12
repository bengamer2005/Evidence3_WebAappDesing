import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../../components/header"
import Order from "../../../hooks/getOrder"
import Product from "../../../hooks/getProduct"
import ReturnButton from "../../../components/returnButton"
import ProductForm from "../../../components/productForm"
import SellProduct from "../../../services/products/sellProduct"
import RequestProduct from "../../../services/products/requestProduct"
import "../../../styles/sellProduct.css"

const Warehouse = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            alert("No estás autenticado.")
            return navigate("/login")
        }

        try {
            const payload = JSON.parse(atob(token.split('.')[1]))
            if (payload.role === "Warehouse") {
                return null
            } else {
                alert("Acceso denegado: no tienes permisos de administrador.")
                return navigate("/halcon-user/dashboard-user")
            }
        } catch (error) {
            console.error("Token inválido", error)
        }
    }, [navigate])

    const fields_sell = [
        {name: "productId", type: "text", placeholder: "PRODUCT ID"},
        {name: "subtractUnit", type: "number", placeholder: "UNITS TO SELL"}
    ]

    const fields_req = [
        {name: "productId", type: "text", placeholder: "REQUESTED PRODUCT ID"},
        {name: "reqUnit", type: "number", placeholder: "REQUESTED UNITS"}
    ]

    const handleStatus = async (order) => {
        try {
            const response = await fetch("http://localhost:3000/halcon/changeStatusInRoute", {
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
                <h1>WAREHOUSE</h1>

                <h3>SELL PRODUCTS</h3>
                <ProductForm service={SellProduct} fields={fields_sell}/>

                <h3>REQUESTS TO PURCHASING</h3>
                <ProductForm service={RequestProduct} fields={fields_req}/>

                <h3>ORDERS</h3>
                <Order endpont={"getInProcess"} change={handleStatus}/>
                <h3>PRODUCTS</h3>
                <Product/>
            </main>
        </>
    )
}

export default Warehouse