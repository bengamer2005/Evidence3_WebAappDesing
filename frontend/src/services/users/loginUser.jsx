import React from "react"

const Login = async ({email, password, username, role}) => {
    try {
        const response = await fetch("https://evidence3-webaappdesing.onrender.com/halcon/user/login", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ email, password, username, role })
        })
    
        if(!response.ok) {
            console.error("Fallo el login")
            return null
        }
    
        const result = await response.json()
        return result
    } catch (error) {
        console.error("Error de conexion, fallo el login", error);
    }
}

export default Login