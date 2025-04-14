import React from "react"
import Header from "../../../components/header"
import Order from "../../../hooks/getOrder"

const Purchasing = () => {
    return (
        <>
            <main>
                <Header/>
                <h1>PURCHASING</h1>
                <p>este sera el apartado de purchasing, form</p>
                <Order/>
            </main>
        </>
    )
}

export default Purchasing