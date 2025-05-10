import React from "react"
import Header from "../../../components/header"
import Order from "../../../hooks/getOrder"
import Product from "../../../hooks/getProduct"
import ReturnButton from "../../../components/returnButton"
import "../../../styles/sellProduct.css"
const Warehouse = () => {
    return (
        <>
            <main>
                <Header/>
                <ReturnButton link="/halcon-user/dashboard-user"></ReturnButton>
                <h1>WAREHOUSE</h1>

                <form>
                    <div className="addTaskBox">

                        <input type="text" name="taskTitle" id="taskInput" placeholder="Add new task title ..." />

                        <input type="text" name="taskDescription" id="taskInput" placeholder="Add new task description ..." />

                        <button id="sendButton" type="submit">
                            <svg fill="none" viewBox="0 0 664 663">
                                <path
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="33.67"
                                    stroke="#6c6c6c"
                                    d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                                ></path>
                            </svg>
                        </button>

                    </div>
                </form>

                <h3>ORDERS</h3>
                <Order/>
                <h3>PRODUCTS</h3>
                <Product/>
            </main>
        </>
    )
}

export default Warehouse