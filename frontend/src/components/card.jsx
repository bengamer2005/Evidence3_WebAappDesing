import React from "react"
import { Link } from "react-router"
import "../styles/card.css"

const Card = (user) => {
    return (
        <>
            <div className="card">
                <div className="top-section">
                    <Link to={user.link}>
                        <img src={user.img} alt="imagen central" className="main-img" />
                    </Link>
                    <div className="button"></div>
                </div>

                <div className="text-section">
                    <h2 className="title">
                        {user.role}
                    </h2>
                </div>

                <div className="definition">
                    {user.description}
                </div>
            </div>
        </>
    )
}

export default Card