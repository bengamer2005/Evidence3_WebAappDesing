document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form")

    if(!form) {
        return console.error("No se encontro el formulario")
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const clientNum = document.getElementById("clientNum").value
        const invoiceNum = document.getElementById("invoiceNum").value

        if(!clientNum || !invoiceNum) {
            return alert("Todos los campos son obligatorios")
        }

        const order = { 
            clientNum, invoiceNum 
        }

        try {
            const response = await fetch("/halcon/order/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(order)
            })

            const dataOrder = await response.json()

            if(response.ok) {
                alert("Se encontro tu orden")

                const orderList = document.getElementById("order-list")
                const {order} = dataOrder

                orderList.innerHTML = `   
                    <table>
                        <tr>
                            <td>Name: </td>
                            <td>${order.name}</td>
                        </tr>

                        <tr>
                            <td>Tax Info: </td>
                            <td>${order.taxInfo}</td>
                        </tr>

                        <tr>
                            <td>Address</td>
                            <td>${order.street}, ${order.city}, ${order.state}</td>
                        </tr>

                        <tr>
                            <td>Products Order</td>
                            <td>${order.productNotes}</td>
                        </tr>
                        
                        <tr>
                            <td>Client info</td>
                            <td>${order.clientNum}</td>
                            <td>${order.invoiceNum}</td>
                        </tr>
                    </table>

                    <p>----------------------------------------------------------------------------------</p>
                `

            } else {
                return alert(`verifica tus datos: ${dataOrder.message}`)
            }
        } catch (error) {
            console.error("Error de conexión:", error)
        }
    })
})