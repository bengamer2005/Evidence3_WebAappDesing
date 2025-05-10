import React from "react"
import Header from "../../../components/header"
import Order from "../../../hooks/getOrder"
import Product from "../../../hooks/getProduct"
import ReturnButton from "../../../components/returnButton"

const Warehouse = () => {
    return (
        <>
            <main>
                <Header/>
                <ReturnButton link="/halcon-user/dashboard-user"></ReturnButton>
                <h1>WAREHOUSE</h1>
                <h3>ORDERS</h3>
                <Order/>
                <h3>PRODUCTS</h3>
                <Product/>
            </main>
        </>
    )
}

export default Warehouse