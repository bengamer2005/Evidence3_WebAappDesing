import { useEffect, useState } from "react"
import ProductForm from "../components/productForm"
import BuyProduct from "../services/products/buyProduct"
import "../styles/formModal.css"

const Request = () => {
    const [requests, setRequests] = useState([])
    const [product, setProduct] = useState(null)
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3000/halcon/request/get")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setRequests(data)
        })
    }, [])

    const handleBuy = (request) => {
        setProduct(request)
        setShowForm(true)
    }

    const closeForm = () => {
        setShowForm(false)
        setProduct(null)
    }

    const fields_buy = [
        {name: "productId", type: "text", placeholder: "PRODUCT ID"},
        {name: "addUnits", type: "number", placeholder: "UNITS TO BUY"}
    ]

    return (
        <>
            <div>
                <table className="users-table" border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>REQUEST PRODUCT</th>
                            <th>REQUEST UNITS</th>
                            <th>CHANGE STATUS</th>
                        </tr>
                    </thead>

                    <tbody>
                        {requests.map((request) => (
                            <tr key={request._id}>
                                <td>{request.reqProduct}</td>
                                <td>{request.reqUnit}</td>
                                <td>
                                    <button onClick={() => handleBuy(request)}>
                                        BUY
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showForm && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <ProductForm product={product} service={BuyProduct} fields={fields_buy} onClose={closeForm}/>
                    </div>
                </div>
            )}
        </>
    )
}

export default Request