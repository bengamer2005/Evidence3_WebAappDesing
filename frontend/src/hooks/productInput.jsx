import React, { useState } from "react"
import SellProduct from "../services/sellProduct"
import "../styles/sellProduct.css"

const ProductInput = (product) => {
    const [productId, setProductId] = useState("")
    const [subtractUnit, setSubtractUnit] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(!productId || !subtractUnit) {
            return alert("All fields are required")
        }

        const result = await SellProduct({productId, subtractUnit})

        if(result) {
            alert("Product sell")
        } else {
            alert("Need to buy more units, send purchasing a request")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="addTaskBox">
                    <input id="taskInput" type="text" placeholder="PRODUCT ID" value={productId} onChange={(event) => setProductId(event.target.value)}/>
                    <input id="taskInput" type="number" placeholder="UNITS" value={subtractUnit} onChange={(event) => setSubtractUnit(event.target.value)}/>

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
        </>
    )
}

export default ProductInput