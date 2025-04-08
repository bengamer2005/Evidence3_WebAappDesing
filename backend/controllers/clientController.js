const Client = require("../models/clientModel")

// Login para el client 
const getOrder = async (req, res) => {
    const {clientNum, invoiceNum} = req.body

    if(!clientNum || !invoiceNum) {
        return res.status(400).json({message: "Faltan datos por proporcionar"})
    }

    try {
        const order = await Client.findOne({clientNum, invoiceNum})
        if (!order) {
            return res.status(404).json({error: "Orden no encontrada" })
        } else {
            return res.status(200).json({ message: "Orden encontrada con exito", order })
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// Crear una orden
const postOrder = async (req, res) => {
    const {name, taxInfo, state, city, street, productNotes} = req.body

    if(!name || !taxInfo || !state || !city || !street || !productNotes) {
        return res.status(400).json({message: "Faltan datos por proporcionar"})
    }

    try {
        const order = await Client.create({name, taxInfo, state, city, street, productNotes})
        res.status(200).json({ message: "Usuario creado con éxito", order })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// Llama a todas las ordenes 
const getOrders = async (req, res) => {

    try {
        const orders = await Client.find({})
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}



module.exports = {
    getOrder,
    postOrder,
    getOrders
}