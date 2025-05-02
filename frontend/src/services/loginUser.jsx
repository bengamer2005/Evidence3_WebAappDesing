import React from "react"

const Login = async (email, password, username, role) => {
    try {
        
    } catch (error) {
        
    }
    const response = await fetch("http://localhost:3000/halcon/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, username, role })
    })

    if(!response) {
        return console.error("Fallo el login");
    }

    const data = await response.json()
    return data
}

export default Login