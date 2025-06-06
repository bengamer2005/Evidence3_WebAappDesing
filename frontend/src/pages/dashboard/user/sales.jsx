import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../../components/header"
import Order from "../../../hooks/getOrder"
import CreateOrder from "../../../services/users/createOrder"
import ReturnButton from "../../../components/returnButton"
import "../../../styles/createUser.css"

const Sales = () => {
    const [name, setName] = useState("")
    const [taxInfo, setTaxInfo] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    const [productNotes, setProductNotes] = useState("")
    
    const handleSubmit = async (event) => {
        event.preventDefault()

        if(!name || !taxInfo || !state || !city || !street || !productNotes) {
            return alert("All fields are requeried")
        }

        const result = await CreateOrder({name, taxInfo, state, city, street, productNotes})

        if(result) {
            alert("Order created")
        } else {
            alert("Fail to create order")
        }
    }

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            alert("No estás autenticado.")
            return navigate("/login")
        }

        try {
            const payload = JSON.parse(atob(token.split('.')[1]))
            if (payload.role === "Sales") {
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
            const response = await fetch("https://evidence3-webaappdesing.onrender.com/halcon/changeStatusInProcess", {
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
        } catch (error) {
            console.error("Error actualizando el status", error)
        }
    }

    return (
        <>
            <main>
                <Header/>
                <ReturnButton link="/halcon-user/dashboard-user"></ReturnButton>
                <h1>SALES</h1>
                <p>Create new orders</p>

                <form id="registerForm" className="form" onSubmit={handleSubmit}>
                    <div className="form-container">
                        <input type="text" className="NumFactura" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}/>
                        <input type="text" className="NumFactura" placeholder="TaxInfo" value={taxInfo} onChange={(event) => setTaxInfo(event.target.value)}/>
                        <input type="text" className="NumFactura" placeholder="State" value={state} onChange={(event) => setState(event.target.value)}/>
                        <input type="text" className="NumFactura" placeholder="City" value={city} onChange={(event) => setCity(event.target.value)}/>
                        <input type="text" className="NumFactura" placeholder="Street" value={street} onChange={(event) => setStreet(event.target.value)}/>
                        <input type="text" className="NumFactura" placeholder="Products Notes" value={productNotes} onChange={(event) => setProductNotes(event.target.value)}/>              
                    </div>

                    <button type="submit" className="submit">SUBMIT</button>
                </form>

                <Order endpont={"getInOrder"} change={handleStatus}/>
            </main>
        </>
    )
}

export default Sales