import React from "react"
import Header from "../../components/header"
import Card from "../../components/card"

const DashboardUser = () => {
    return (
        <>
            <main>
                <Header/>
                <div className="cards">
                    <Card role = "SALES"></Card>
                    <Card role = "PURCHASING"></Card>
                    <Card role = "WAREHOUSE"></Card>
                    <Card role = "ROUTE"></Card>
                </div>
            </main>
        </>
    )
}

export default DashboardUser