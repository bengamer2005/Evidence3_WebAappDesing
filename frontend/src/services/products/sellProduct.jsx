import React from "react"

const SellProduct = async ({productId, subtractUnit}) => {
    try {
        const response = await fetch("https://evidence3-webaappdesing.onrender.com/halcon/inventory/productSubtract", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ productId, subtractUnit })
        })

        if(!response.ok) {
            console.error("Fallo el SellProduct")
            return null
        }

        const result = await response.json()
        return result
    } catch (error) {
        console.error("Error de conexion, fallo el SellProduct", error)
    }
}

export default SellProduct