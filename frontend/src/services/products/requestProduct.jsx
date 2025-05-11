import React from "react"

const RequestProduct = async ({productId, reqUnit}) => {
    try {
        const response = await fetch("http://localhost:3000/halcon/request/post", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ productId, reqUnit })
        })

        if(!response.ok) {
            console.error("Fallo el RequestProduct")
            return null
        }

        const result = await response.json()
        return result
    } catch (error) {
        console.error("Error de conexion, fallo el RequestProduct", error)
    }
}

export default RequestProduct