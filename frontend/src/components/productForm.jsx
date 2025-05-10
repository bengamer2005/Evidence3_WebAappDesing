import React, { useState } from "react"
import "../styles/sellProduct.css"

const ProductForm = ({service, fields}) => {
    const [data, setData] = useState({})

    const handleChange = (event) => {
        const { name, value, type } = event.target
        setData(prev => ({
            ...prev,
            [name]: type === "number" ? Number(value) : value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        for (const key of Object.keys(data)) {
            if (!data[key]) {
                return alert("All fields are required")
            }
        }

        const result = await service(data)

        if(result) {
            alert("Process successfully")
            window.location.reload()
        } else {
            alert("Fail, please check the prodcut ID or Units")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="addTaskBox">

                {fields.map((field) => (
                    <input key={field.name} id="taskInput" name={field.name} type={field.type} placeholder={field.placeholder} value={data[field.name] || ""} onChange={handleChange}/>
                ))}

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
    )
}

export default ProductForm