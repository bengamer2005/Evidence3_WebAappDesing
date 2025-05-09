import React, { useState } from "react"
import { Link } from "react-router"
import { useNavigate } from "react-router"
import Header from "../../components/header"
import Login from "../../services/loginUser"
import "../../styles/userView.css"

const UserViews = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const changePage = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()

        if(!email || !username || !password || !role) {
            return alert("All fields are require")
        }

        const result = await Login({email, username, password, role})

        if(result && result.token) {
            localStorage.setItem("token", result.token)
            console.log("Login exitoso, token: ", result.token)
            if(role.trim().toLowerCase() === "admin") {
                changePage("/halcon-user/dashboard-admin")
            } else {
                changePage("/halcon-user/dashboard-user")
            }
        } else {
            alert("Fail to login")
        }
    }

    return (
        <>
            <Header/>
            <main>
                <form id="registerForm" className="form" onSubmit={handleLogin}>
                    <span className="title">USERS</span>
                    <span className="subtitle">Enter the platform with your data</span>

                    <div className="form-container">
                        <input type="email" className="NumFactura" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                        <input type="text" className="NumFactura" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
                        <input type="password" className="NumFactura" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                        <input type="role" className="NumFactura" placeholder="Role" value={role} onChange={(event) => setRole(event.target.value)}/>
                    </div>

                    <button type="submit" className="submit">SUBMIT</button>

                    <p className="sign-up-label">
                        You were looking for an Order <Link to="/">CLIENT</Link>
                    </p>
                </form>
            </main>
        </>
    )
}

export default UserViews