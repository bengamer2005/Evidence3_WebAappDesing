import React from "react"
import Header from "../../../components/header"
import Order from "../../../hooks/getOrder"
import ReturnButton from "../../../components/returnButton"

const RouteUser = () => {
    return (
        <>
            <main>
                <Header/>
                <ReturnButton link="/halcon-user/dashboard-user"></ReturnButton>
                <h1>ROUTE</h1>
                <p>este sera el apartado de route, falta: form</p>
                <Order/>
            </main>
        </>
    )
}

export default RouteUser