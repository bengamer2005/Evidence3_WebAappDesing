const Request = require("../models/requestModel")

// agregar una peticion
const postRequest = async (req, res) => {
    const {productId, reqUnit} = req.body

    if(!productId || !reqUnit) {
        return res.status(400).json({message: "Faltan parametros por ingresar"})
    }

    try {
        const request = await Request.create({productId, reqUnit})
        res.status(200).json({request})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// Llama a todas las peticiones
const getRequest = async (req, res) => {
    try {
        const requests = await Request.find({status: true})
        res.status(200).json(requests)
    } catch (error) {
        res.status(500).json({error: error.message})
    } 
}

// Cambia el status de las peticiones
const updateStatus = async (req, res) => {
    const { productId, status } = req.body

    try {
        const request = await Request.findOne({productId})
        if(!request) {
            return res.status(404).json({ message: "Request no encontrada" })
        }

        request.status = false
        await request.save()

        res.status(200).json({ message: "State actualizado", request })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    postRequest,
    getRequest,
    updateStatus
}