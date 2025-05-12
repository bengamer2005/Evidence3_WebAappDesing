import {useEffect, useState} from "react"
import "../styles/changeStatus.css"
const Order = ({endpont, change}) => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("https://evidence3-webaappdesing.onrender.com/halcon/" + endpont)
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
                            <th>CHANGE STATUS</th>
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
                                <td>
                                    <button className="btn" onClick={() => change(order)}>
                                        <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
                                            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                                        </svg>

                                        <span className="text">CHANGE</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Order