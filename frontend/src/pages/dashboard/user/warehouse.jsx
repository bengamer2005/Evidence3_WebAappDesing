import React, { useState } from "react"
import Header from "../../../components/header"
import Order from "../../../hooks/getOrder"
import Product from "../../../hooks/getProduct"
import ReturnButton from "../../../components/returnButton"
import ProductInput from "../../../hooks/productInput"
import ProductReq from "../../../hooks/productRequest"
import "../../../styles/sellProduct.css"

const Warehouse = () => {

    return (
        <>
            <main>
                <Header/>
                <ReturnButton link="/halcon-user/dashboard-user"></ReturnButton>
                <h1>WAREHOUSE</h1>

                <h3>SELL PRODUCTS</h3>
                <ProductInput/>

                <h3>REQUESTS TO PURCHASING</h3>
                <ProductReq/>

                <h3>ORDERS</h3>
                <Order/>
                <h3>PRODUCTS</h3>
                <Product/>
            </main>
        </>
    )
}

export default Warehouse