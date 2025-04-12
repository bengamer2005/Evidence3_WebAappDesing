import React from "react"
import { Link } from "react-router"
import "../styles/header.css"

const Header = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <h1>HALCON</h1>
                </div>
            </header>

            <nav>
                <Link to="/halcon-user">User</Link>
                <Link to="/">Client</Link>
            </nav>
        </>
    )
}

export default Header