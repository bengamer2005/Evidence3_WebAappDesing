import React from "react"
import Header from "../../../components/header"
import Request from "../../../hooks/getRequestProduct"
import ReturnButton from "../../../components/returnButton"

const Purchasing = () => {
    return (
        <>
            <main>
                <Header/>
                <ReturnButton link="/halcon-user/dashboard-user"></ReturnButton>
                <h1>PURCHASING</h1>
                <p>este sera el apartado de purchasing, form</p>
                <Request/>
            </main>
        </>
    )
}

export default Purchasing