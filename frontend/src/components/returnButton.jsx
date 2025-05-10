import React from "react"
import { Link } from "react-router"
import "../styles/returnButton.css"

const ReturnButton = (button) => {
    return(
        <>
            <div className="styled-wrapper">
                <Link to={button.link} className="button">
                    <div className="button-box">
                        <span className="button-elem">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
                                <path fill="black" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                            </svg>
                        </span>

                        <span className="button-elem">
                            <svg fill="black" viewBox="0 0  24 24" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
                                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                            </svg>
                        </span>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ReturnButton