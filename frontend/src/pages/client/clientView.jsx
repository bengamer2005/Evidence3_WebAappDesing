import React from "react"
import Header from "../../components/header"
import GetClientOrder from "../../hooks/getClientOrder"

const Client = () => {
    return (
        <>
            <main>
                <Header/>
                <h1>CLIENT ORDER</h1>
                <p>Welocme, here are the details of your Order</p>
                <GetClientOrder/>
            </main>
        </>
    )
}

export default Client