import React from "react"
import Header from "../../../components/header"
import Order from "../../../hooks/getOrder"

const RouteUser = () => {
    return (
        <>
            <main>
                <Header/>
                <h1>ROUTE</h1>
                <p>este sera el apartado de route, falta: form</p>
                <Order/>
            </main>
        </>
    )
}

export default RouteUser