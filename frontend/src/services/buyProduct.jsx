import React from "react"

const BuyProduct = async ({productId, addUnits}) => {
    try {
        const response = await fetch("http://localhost:3000/halcon/inventory/productAdd", {
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

        const result = await response.json()
        return result
    } catch (error) {
        console.error("Error de conexion, fallo el BuyProduct", error)
    }
}

export default BuyProduct