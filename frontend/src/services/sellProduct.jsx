import React from "react"

const SellProduct = async ({product, subtractUnit}) => {
    try {
        const response = await fetch("", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ product, subtractUnit })
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