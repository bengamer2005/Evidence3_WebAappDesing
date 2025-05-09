import React from "react"
import Header from "../../../components/header"
import Order from "../../../hooks/getOrder"
import ReturnButton from "../../../components/returnButton"

const Sales = () => {
    return (
        <>
            <main>
                <Header/>
                <ReturnButton link="/halcon-user/dashboard-user"></ReturnButton>
                <h1>SALES</h1>
                <p>este sera el apartado de sales, falta: form</p>
                <Order/>
            </main>
        </>
    )
}

export default Sales