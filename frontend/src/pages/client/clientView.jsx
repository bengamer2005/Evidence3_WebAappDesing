import React from "react"
import Header from "../../components/header"
import Order from "../../hooks/getOrder"

const Client = () => {
    return (
        <>
            <main>
                <Header/>
                <h1>CLIENT ORDER</h1>
                <p>este sera el apartado de las ordenes de los clietnes, falta: form</p>
                <Order/>
            </main>
        </>
    )
}

export default Client