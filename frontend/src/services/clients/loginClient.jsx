import React from "react"

const Login = async ({clientNum, invoiceNum}) => {
    try {
        const resposne = await fetch("https://evidence3-webaappdesing.onrender.com/halcon/order/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ clientNum, invoiceNum })
        })

        if(!resposne.ok) {
            console.error("Fallo el login");
            return null
        }

        const result = await resposne.json()
        return result
    } catch (error) {
        console.error("Error de conexion, fallo el login", error);
    }
}

export default Login