import React, { useState } from "react"
import Header from "../../../components/header"
import Create from "../../../services/users/createUser"
import ReturnButton from "../../../components/returnButton"
import "../../../styles/createUser.css"

const CreateUser = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")

    const handleLogin = async (event) => {
        event.preventDefault()

        if(!email || !username || !password || !role) {
            return alert("All fields are require")
        }

        const result = await Create({email, username, password, role})

        if(result) {
            alert("User created")
            window.location.reload()
        } else {
            alert("Fail to create user")
        }
    }

    return (
        <>
            <main>
                <Header/>
                <ReturnButton link="/halcon-user/dashboard-admin"></ReturnButton>
                <h1>CREATE USER</h1>
                <p>Create the new User with the following form</p>
                <form id="registerForm" className="form" onSubmit={handleLogin}>

                    <div className="form-container">
                        <input type="email" className="NumFactura" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                        <input type="text" className="NumFactura" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
                        <input type="password" className="NumFactura" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                        <select className="NumFactura" value={role} onChange={(event) => setRole(event.target.value)}>
                            <option hidden="">-- ROLES --</option>
                            <option>Sales</option>
                            <option>Purchasing</option>
                            <option>Warehouse</option>
                            <option>Route</option>
                            <option>Admin</option>
                        </select>                    
                    </div>

                    <button type="submit" className="submit">SUBMIT</button>
                </form>
            </main>
        </>
    )
}

export default CreateUser