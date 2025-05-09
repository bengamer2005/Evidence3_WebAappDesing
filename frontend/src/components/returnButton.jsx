import React from "react"
import { Link } from "react-router"
import "../styles/returnButton.css"

const ReturnButton = (button) => {
    return(
        <>
            <button className="btn">
                <Link to={button.link}>RETURN</Link>
            </button>
        </>
    )
}

export default ReturnButton