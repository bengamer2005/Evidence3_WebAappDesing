import {useEffect, useState} from "react"

const Order = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/halcon/getOrder")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setOrders(data)
        })
    }, [])

    return (
        <div>
            {orders.map((order, index) => (
                <div key={index}>
                <table>
                    <tbody>
                        <tr>
                            <td>Name: </td>
                            <td>{order.name}</td>
                        </tr>

                        <tr>
                            <td>Tax Info: </td>
                            <td>{order.taxInfo}</td>
                        </tr>

                        <tr>
                            <td>Address</td>
                            <td>{order.street}, {order.city}, {order.state}</td>
                        </tr>

                        <tr>
                            <td>Products Order</td>
                            <td>{order.productNotes}</td>
                        </tr>
                        
                        <tr>
                            <td>Client info</td>
                            <td>{order.clientNum}</td>
                            <td>{order.invoiceNum}</td>
                        </tr>
                    </tbody>
                </table>
                    <p>------------------------------------------------------------------------------------------------------</p>
                </div>
            ))}
        </div>
    )
}

export default Order