import { useEffect, useState } from "react"
import 

const Request = () => {
    const [requests, setRequests] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/halcon/request/get")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setRequests(data)
        })
    }, [])

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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Request