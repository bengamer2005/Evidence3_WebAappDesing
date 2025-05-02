import React from "react"
import Header from "../../components/header"
import { Link } from "react-router"
import "../../styles/UserView.css"

const UserViews = () => {
    return (
        <>
            <Header/>
            <main>
                <form id="registerForm" className="form">
                    <span className="title">USERS</span>
                    <span className="subtitle">Enter the platform with your data</span>

                    <div className="form-container">
                        <input type="email" id="email" className="NumFactura" placeholder="Email"/>
                        <input type="text" id="username" className="NumFactura" placeholder="Username"/>
                        <input type="password" id="password" className="NumFactura" placeholder="Password"/>
                        <input type="role" id="role" className="NumFactura" placeholder="Role"/>
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