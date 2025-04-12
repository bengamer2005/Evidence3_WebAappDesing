import React from "react"
import "../styles/card.css"
import { Link } from "react-router"

const Card = (user) => {
    return (
        <div className="card">
            <div className="tpo-section">
                <Link to="/halcon-user/dashboard-user/">User</Link>
            </div>
        </div>
    )
}

export default Card