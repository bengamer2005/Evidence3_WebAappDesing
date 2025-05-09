import React from "react"
import Header from "../../../components/header"
import Order from "../../../hooks/getOrder"
import ReturnButton from "../../../components/returnButton"

const SeeOrders = () => {
    return (
        <>
            <main>
                <Header/>
                <ReturnButton link="/halcon-user/dashboard-admin"></ReturnButton>

                <h1>SEE ORDERS</h1>
                <p>este sera el apartado de see orders</p>
                <Order/>
            </main>
        </>
    )
}

export default SeeOrders