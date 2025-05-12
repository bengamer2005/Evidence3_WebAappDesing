import React from "react"

const BuyProduct = async ({productId, addUnits}) => {
    try {
        const response = await fetch("https://evidence3-webaappdesing.onrender.com/halcon/inventory/productAdd", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({productId, addUnits})
        })

        if(!response.ok) {
            console.error("Fallo el BuyProduct")
            return null
        }

        const changeStatus = await fetch("https://evidence3-webaappdesing.onrender.com/halcon/request/updateStatus", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({productId, status: false})
        })

        if(!changeStatus.ok) {
            console.error("Fallo el cambiar el status")
            return null
        }

        const result = await response.json()
        return result
    } catch (error) {
        console.error("Error de conexion, fallo el BuyProduct", error)
    }
}

export default BuyProduct