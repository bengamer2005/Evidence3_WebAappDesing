import Header from "../../../components/header"
import Order from "../../../hooks/getOrder"
import Product from "../../../hooks/getProduct"
import ReturnButton from "../../../components/returnButton"
import ProductForm from "../../../components/productForm"
import SellProduct from "../../../services/products/sellProduct"
import RequestProduct from "../../../services/products/requestProduct"
import "../../../styles/sellProduct.css"

const Warehouse = () => {
    const fields_sell = [
        {name: "productId", type: "text", placeholder: "PRODUCT ID"},
        {name: "subtractUnit", type: "number", placeholder: "UNITS TO SELL"}
    ]

    const fields_req = [
        {name: "reqProduct", type: "text", placeholder: "REQUESTED PRODUCT ID"},
        {name: "reqUnit", type: "number", placeholder: "REQUESTED UNITS"}
    ]

    return (
        <>
            <main>
                <Header/>
                <ReturnButton link="/halcon-user/dashboard-user"></ReturnButton>
                <h1>WAREHOUSE</h1>

                <h3>SELL PRODUCTS</h3>
                <ProductForm service={SellProduct} fields={fields_sell}/>

                <h3>REQUESTS TO PURCHASING</h3>
                <ProductForm service={RequestProduct} fields={fields_req}/>

                <h3>ORDERS</h3>
                <Order/>
                <h3>PRODUCTS</h3>
                <Product/>
            </main>
        </>
    )
}

export default Warehouse