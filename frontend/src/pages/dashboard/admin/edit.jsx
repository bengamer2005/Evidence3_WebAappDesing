import React, { useState } from "react"
import Header from "../../../components/header"
import ReturnButton from "../../../components/returnButton"
import Users from "../../../hooks/getUsers"

const EditUser = () => {
    const [form, setForm] = useState(false)
    const [userId, setUserId] = useState(null)
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")

    const handleEdit = (user) => {
        setForm(true)
        setUserId(user._id)
        setEmail(user.email)
        setUsername(user.username)
        setPassword(user.password)
        setRole(user.role)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const user = { email, username, password, role }

        fetch(`https://evidence3-webaappdesing.onrender.com/halcon/user/update/${userId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        .then((res) => res.json())
        .then(() => {
            setForm(false)
            alert("User updated successfully")
        })
        .catch((error) => console.error(error))
    }
    return (
        <>
            <main>
                <Header/>
                <ReturnButton link="/halcon-user/dashboard-admin"></ReturnButton>
                <h1>EDIT USER</h1>
                <p>Select the user to edit</p>

                <Users edit={handleEdit} />

                {form && (
                    <form onSubmit={handleSubmit} className="form">
                        <input type="email" className="NumFactura" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="text" className="NumFactura" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <input type="password" className="NumFactura" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <select className="NumFactura" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option hidden>-- ROLES --</option>
                            <option>Sales</option>
                            <option>Purchasing</option>
                            <option>Warehouse</option>
                            <option>Route</option>
                            <option>Admin</option>
                        </select>
                        <button type="submit">Guardar</button>
                    </form>
                )}
            </main>
        </>
    )
}

export default EditUser