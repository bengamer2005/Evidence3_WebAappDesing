import { useEffect, useState } from "react"

const Product = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/halcon/inventory/products")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setProducts(data)
        })
    }, [])

    return (
        <>
            <div>
                <table className="users-table" border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>UNITS</th>
                            <th>ID</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id}>
                                <td>{product.productName}</td>
                                <td>{product.productUnit}</td>
                                <td>{product.productId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Product