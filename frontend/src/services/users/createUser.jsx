import React from "react"

const Create = async ({email, password, username, role}) => {
    try {
        const response = await fetch("http://localhost:3000/halcon/user/create", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ email, password, username, role })
        })

        if(!response.ok) {
            console.error("Fallo el create")
            return null
        }

        const result = await response.json()
        return result
    } catch (error) {
        console.error("Error de conexion, fallo el create", error)
    }
}

export default Create