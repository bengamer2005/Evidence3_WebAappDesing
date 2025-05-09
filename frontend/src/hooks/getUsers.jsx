import { useEffect, useState } from "react"
import "../styles/users.css"

const Users = ({edit}) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/halcon/user/getUsers")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setUsers(data)
        })
    }, [])

    return (
        <>
            <div>
                <table className="users-table" border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>EMAIL</th>
                            <th>USERNAME</th>
                            <th>ROLE</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button onClick={() => edit(user)}>EDIT</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Users