document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form")
    const orderList = document.getElementById("order-list")

    if(!form) {
        return console.error("No se encontro el formulario")
    }

    if(!orderList) {
        return console.error("No se encotro la lista")
    }

    fetchOrders()
    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const name = document.getElementById("name").value
        const taxInfo = document.getElementById("taxInfo").value
        const state = document.getElementById("state").value
        const city = document.getElementById("city").value
        const street = document.getElementById("street").value
        const productNotes = document.getElementById("productNotes").value

        if(!name || !taxInfo || !state || !city || !street || !productNotes){
            return alert("Todos los campos son obligatorios")
        }

        const order = {
            name, taxInfo, state, city, street, productNotes
        }

        try {
            const response = await fetch("/halcon/order/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(order)
            })
            const dataOrder = await response.json()

            if(response.ok) {
                alert("Se registro la orden")
                form.reset()
                fetchOrders()

            } else {
                return alert(`verifica tus datos: ${dataOrder.message}`)
            }
        } catch (error) {
            console.error("Error de conexión:", error)
        }
    })

    async function fetchOrders() {
        orderList.innerHTML = ""
        const response = await fetch("/halcon/getOrder")
        const orders = await response.json()
        
        orders.forEach((Order) => {
            const orderCard = document.createElement("div")

            orderCard.innerHTML = `   
                <table>
                    <tr>
                        <td>Name: </td>
                        <td>${Order.name}</td>
                    </tr>

                    <tr>
                        <td>Tax Info: </td>
                        <td>${Order.taxInfo}</td>
                    </tr>

                    <tr>
                        <td>Address</td>
                        <td>${Order.street}, ${Order.city}, ${Order.state}</td>
                    </tr>

                    <tr>
                        <td>Products Order</td>
                        <td>${Order.productNotes}</td>
                    </tr>
                    
                    <tr>
                        <td>Client info</td>
                        <td>${Order.clientNum}</td>
                        <td>${Order.invoiceNum}</td>
                    </tr>
                </table>

                <p>------------------------------------------------------------------------------------------------------</p>            `
            orderList.appendChild(orderCard)
        })
    }
})