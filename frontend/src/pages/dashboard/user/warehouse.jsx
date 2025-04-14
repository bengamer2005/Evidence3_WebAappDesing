import React from "react"
import Header from "../../../components/header"
import Order from "../../../hooks/getOrder"

const Warehouse = () => {
    return (
        <>
            <main>
                <Header/>
                <h1>WAREHOUSE</h1>
                <p>este sera el apartado de warehouse, falta: form</p>
                <Order/>
            </main>
        </>
    )
}

export default Warehouse