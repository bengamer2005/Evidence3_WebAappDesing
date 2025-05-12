import React from "react"

const CreateOrder = async ({name, taxInfo, state, city, street, productNotes}) => {
    try {
        const response = await fetch("https://evidence3-webaappdesing.onrender.com/halcon/order/create", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({name, taxInfo, state, city, street, productNotes})
        })

        if(!response.ok) {
            console.error("Fallo el createOrder")
            return null
        }

        const result = await response.json()
        return result
    } catch (error) {
        console.error("Error de conexion, fallo el createOrder", error)
    }
}

export default CreateOrder