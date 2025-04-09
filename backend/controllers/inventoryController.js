const Product = require("../models/inventoryModel")

// Crear un producto nuevo
const postProduct = async (req, res) => {
    const {productName} = req.body

    if(!productName) {
        return res.status(400).json({message: "falta de ingresar el nombre del producto"})
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
        const {addUnits} = req.body
    
        const product = await Product.findById(req.params.id)
    
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
        const {subtractUnit} = req.body
    
        const product = await Product.findById(req.params.id)
    
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

// Llama a todos los productos del invntario
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    postProduct,
    addUnit,
    subtractUnit,
    getProducts
}