document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-client")

    if(!form) {
        console.error("Formulario no encontrado")
        return
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const clientNum = document.getElementById("clientNum").value
        const invoiceNum = document.getElementById("invoiceNum").value

        if(!clientNum || !invoiceNum) {
            alert("debes de ingresar todos los campos")
            return
        }

        const client = {
            clientNum,
            invoiceNum
        }

        try {
            const response = await fetch("/halcon/order/orderInfo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(client)
            })

            const clientData = await response.json()

            if(response.ok) {
                // cambiar direccion si es necesario
                window.location.href = "halcon-client/order"
            } else {
                alert(`error: ${clientData.message}`)
            }
        } catch (error) {
            console.error("error al enviar los datos: ", error)
        }
    })
})