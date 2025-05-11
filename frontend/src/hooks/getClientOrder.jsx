import { useEffect, useState } from "react"

const GetClientOrder = () => {
    const [clientOrder, setClientOrder] = useState([])

    useEffect(() => {
        const getOrder = async () => {
            try {
                const token = localStorage.getItem("token")
    
                const response = await fetch("http://localhost:3000/halcon/getOneOrder", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                })
    
                if(!response.ok) {
                    console.error("Fallo el GetClientORder");
                    return null
                }
    
                const result = await response.json()
                setClientOrder([result])        
            } catch (error) {
                console.error("Error de conexion, fallo el GetClientORder", error);
            }
        }

        getOrder()
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
                        </tr>
                    </thead>

                    <tbody>
                        {clientOrder.map((order) => (
                            <tr key={order._id}>
                                <td>{order.name}</td>
                                <td>{order.taxInfo}</td>
                                <td>{order.street}, {order.city}, {order.state}</td>
                                <td>{order.productNotes}</td>
                                <td>{order.clientNum}, {order.invoiceNum}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default GetClientOrder