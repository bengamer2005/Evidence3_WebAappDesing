const Product = require("../models/inventoryModel")

const defaultProducts = async (req, res) => {
    try {
        const existProducts = await Product.findOne()

        if(!existProducts) {
            
            const product = new Product({
                productName: "Cemento",
            })
    
            const product2 = new Product({
                productName: "Mixto"
            })
    
            const product3 = new Product({
                productName: "Arena"
            })
            
            const product4 = new Product({
                productName: "Varilla"
            })
    
            const product5 = new Product({
                productName: "Block"
            })
    
            product.save()
            product2.save()
            product3.save()
            product4.save()
            product5.save()
    
            console.log("\nDefault products created: ", product, product2, product3, product4, product5)
        } else {
            console.log("Default products already exist")
        }


    } catch (error) {
        console.error("Error creating default products: ", error)
    }
}

module.exports = defaultProducts