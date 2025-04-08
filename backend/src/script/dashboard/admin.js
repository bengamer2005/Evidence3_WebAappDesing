document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-admin")
    const orderList = document.getElementById("order-list")

    if(!form) {
        console.error("Formulario no encontrado")
    }

    if(!orderList) {
        console.error("No se encontro la lista")
    }

    fetchOrder()

    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const name = document.getElementById("name").value
        const taxInfo = document.getElementById("taxInfo").value
        const state = document.getElementById("state").value
        const city = document.getElementById("city").value
        const street = document.getElementById("street").value
        const productNotes = document.getElementById("productNotes").value

        if(!name || !taxInfo || !state || !city || !street || !productNotes) {
            alert("debes de ingresar todos los campos")
            return
        }

        const order = {
            name,
            taxInfo,
            state,
            city,
            street,
            productNotes
        }

        try {
            const response = await fetch("/halcon/order/orderPost", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(order)
            })

            const orderData = await response.json()

            if (response.ok) {
                form.reset() 
                fetchOrder()
            } else {
                alert(`error: ${orderData.message}`)
            }
        } catch (error) {
            console.error("error al enviar los datos: ", error)
        }
    })

    async function fetchOrder() {
        orderList.innerHTML = ""
        const response = await fetch("/halcon/order/orderGet")
        const orders = await response.json()

        orders.forEach((order) => {
            const orderInfo = document.createElement("div")
            orderInfo.innerHTML = `
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
                    <td>${order.state}, ${order.city}, ${order.street}</td>
                </tr>
                
                <tr>
                    <td>Products Order</td>
                    <td>${order.productNotes}</td>
                </tr>
            </table>

            <p>-----------------------------------------</p>
            `
            orderList.appendChild(orderInfo)
            
        })
    }
})