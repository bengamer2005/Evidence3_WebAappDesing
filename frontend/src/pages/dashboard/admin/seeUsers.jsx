import React from "react"
import Header from "../../../components/header"
import Users from "../../../hooks/getUsers"
import ReturnButton from "../../../components/returnButton"

const SeeUsers = () => {
    return (
        <>
            <main>
                <Header/>
                <ReturnButton link="/halcon-user/dashboard-admin"></ReturnButton>
                <h1>SEE USERS</h1>
                <p>este sera el apartado de see users</p>

                <Users/>
            </main>
        </>
    )
}

export default SeeUsers