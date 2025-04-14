import React from "react"
import Header from "../../../components/header"
import Order from "../../../hooks/getOrder"

const Sales = () => {
    return (
        <>
            <main>
                <Header/>
                <h1>SALES</h1>
                <p>este sera el apartado de sales, falta: form</p>
                <Order/>
            </main>
        </>
    )
}

export default Sales