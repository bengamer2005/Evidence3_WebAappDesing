import React from "react"
import Header from "../../../components/header"
import Order from "../../../hooks/getOrder"
import ReturnButton from "../../../components/returnButton"

const Warehouse = () => {
    return (
        <>
            <main>
                <Header/>
                <ReturnButton link="/halcon-user/dashboard-user"></ReturnButton>
                <h1>WAREHOUSE</h1>
                <p>este sera el apartado de warehouse, falta: form</p>
                <Order/>
            </main>
        </>
    )
}

export default Warehouse