import React from "react"
import Header from "../../components/header"
import Card from "../../components/card"

const DashboardAdmin = () => {
    return (
        <>
            <Header/>
            <div className="cards">
                <Card role = "CREATE"></Card>
                <Card role = "EDIT"></Card>
                <Card role = "SEE USERS"></Card>
                <Card role = "SEE ORDERS"></Card>
            </div>
        </>
    )
}

export default DashboardAdmin