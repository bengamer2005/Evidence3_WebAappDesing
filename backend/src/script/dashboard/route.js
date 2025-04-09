document.addEventListener("DOMContentLoaded", () => {
    const orderList = document.getElementById("order-list")

    if(!orderList) {
        return console.error("No se encotro la lista")
    }

    fetchOrders()

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