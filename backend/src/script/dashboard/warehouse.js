document.addEventListener("DOMContentLoaded", () => {
    const orderList = document.getElementById("order-list")
    const tableProduct = document.querySelector("#product-table tbody")
    const form = document.getElementById("form")
    const formNewProduct = document.getElementById("form-newProduct")

    if(!form || !formNewProduct) {
        return console.error("No se encontro el formulario")
    }

    if(!tableProduct) {
        return console.error("No se encotro la tabla")
    }
    
    fetchOrders()
    fetchProducts()
    fetchReq()

    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const reqProduct = document.getElementById("reqProduct").value
        const reqUnit = document.getElementById("reqUnit").value

        const request = {
            reqProduct, reqUnit
        }

        try {
            const response = await fetch("/halcon/request/post", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(request)
            })

            const requestData = await response.json()

            if(response.ok) {
                alert("Request send suscesfully")
                form.reset()

                fetchOrders()
                fetchProducts()
                fetchReq()
            } else {

            }
        } catch (error) {
            
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

                    <tr></tr>

                    <tr>
                        <td>Order status</d>
                        <td>${Order.status}</td>
                    </tr>

                </table>

                <p>------------------------------------------------------------------------------------------------------</p>
            `
            orderList.appendChild(orderCard)
        })
    }

    async function fetchProducts() {
        tableProduct.innerHTML= ""
        const response = await fetch("/halcon/inventory/products")
        const inventory = await response.json()

        inventory.forEach((product) => {
            const productList = document.createElement("tr")

            productList.innerHTML = `
                <td>${product.productId}</td>
                <td>${product.productName}</td>
                <td>${product.productUnit}</td>
            `

            tableProduct.appendChild(productList)
        })
    }

    async function fetchReq(req) {
        
    }
})