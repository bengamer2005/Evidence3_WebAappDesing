import {useEffect, useState} from "react"

const Order = (status) => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/halcon/" + status.endpont)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setOrders(data)
        })
    }, [])

    return (
        <>
            <div>
                <table className="users-table" border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>TAX INFO</th>
                            <th>ADDRESS</th>
                            <th>PRODUCTS ORDERS</th>
                            <th>CLIENT INFO</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td>{order.name}</td>
                                <td>{order.taxInfo}</td>
                                <td>{order.street}, {order.city}, {order.state}</td>
                                <td>{order.productNotes}</td>
                                <td>{order.clientNum}, {order.invoiceNum}</td>
                                <td>{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Order