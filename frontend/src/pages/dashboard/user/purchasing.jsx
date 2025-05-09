import React from "react"
import Header from "../../../components/header"
import Order from "../../../hooks/getOrder"
import ReturnButton from "../../../components/returnButton"

const Purchasing = () => {
    return (
        <>
            <main>
                <Header/>
                <ReturnButton link="/halcon-user/dashboard-user"></ReturnButton>
                <h1>PURCHASING</h1>
                <p>este sera el apartado de purchasing, form</p>
                <Order/>
            </main>
        </>
    )
}

export default Purchasing