document.addEventListener("DOMContentLoaded", () => {
    const tableProduct = document.querySelector("#product-table tbody")

    if(!tableProduct) {
        return console.error("No se encotro la tabla")
    }

    fetchProducts()

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
                <button onclick="addUnit('${product._id}')">Add units</button>
            `

            tableProduct.appendChild(productList)
        })
    }

    window.addUnit = async (id) => {
        const addUnits = prompt("Units to add:")

        if(addUnits) {
            const response = await fetch(`/halcon/inventory/productAdd/${id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    productUnit: addUnits
                })
            })

            if (response.ok) {
                fetchProducts()
            } else {
                console.error("Error al actualizar el inventario")
            }
        }
    }
})