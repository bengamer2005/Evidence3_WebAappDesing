import React, { useState } from "react"
import RequestProduct from "../services/requestProduct"
import "../styles/sellProduct.css"

const ProductReq = (product) => {
    const [reqProduct, setReqProduct] = useState("")
    const [reqUnit, setReqUnit] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(!reqProduct || !reqUnit) {
            return alert("All fields are required")
        }

        const result = await RequestProduct({reqProduct, reqUnit})

        if(result) {
            alert("Request send")
            window.location.reload()
        } else {
            alert("Fail to send request")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="addTaskBox">
                    <input id="taskInput" type="text" placeholder="REQUEST PRODUCT ID" value={reqProduct} onChange={(event) => setReqProduct(event.target.value)}/>
                    <input id="taskInput" type="number" placeholder="REQUEST UNITS" value={reqUnit} onChange={(event) => setReqUnit(event.target.value)}/>

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

export default ProductReq