const Product = require("../models/inventoryModel")

// Crear un producto nuevo
const postProduct = async (req, res) => {
    const {productName} = req.body

    if(!productName) {
        return res.status(400).json({message: "Ingresa el nombre del producto"})
    }

    try {
        const product = await Product.create({productName})
        res.status(200).json({ message: "Producto creado con éxito", product })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// Agregar unidades a un producto
const addUnit = async (req, res) => {
    try {
        const {productId} = req.params
        const {addUnits} = req.body
    
        const product = await Product.findOne({productId})
    
        if(!product) {
            return res.status(404).json({ mensaje: "Producto no encontrado" })
        }
    
        product.productUnit += addUnits
    
        await product.save()
        res.json({ mensaje: `Producto actualizado, cuentas con ${product.productUnit} de inventario` })
        
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar el inventario", error })
    }
}

// Quitar unidades a un producto
const subtractUnit = async (req, res) => {
    try {
        const {productId} = req.params
        const {subtractUnit} = req.body
    
        const product = await Product.findOne({productId})
    
        if(!product) {
            return res.status(404).json({ mensaje: "Producto no encontrado" })
        }

        if(subtractUnit > product.productUnit) {
            return res.status(400).json({ message: `No cuentas con suficiente inventrario, solo cuentas con: ${product.productUnit} `})
        }

        product.productUnit -= subtractUnit
    
        await product.save()
        res.json({ mensaje: `Producto actualizado, te quedan ${product.productUnit} unidades de inventario` })
        
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar el inventario", error })
    }
}

module.exports = {
    postProduct,
    addUnit,
    subtractUnit
}