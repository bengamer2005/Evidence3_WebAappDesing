const Request = require("../models/requestModel")

// agregar una peticion
const postRequest = async (req, res) => {
    const {reqProduct, reqUnit} = req.body

    if(!reqProduct || !reqUnit) {
        return res.status(400).json({message: "Faltan parametros por ingresar"})
    }

    try {
        const request = await Request.create({reqProduct, reqUnit})
        res.status(200).json({request})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// Llama a todas las peticiones
const getRequest = async (req, res) => {
    try {
        const requests = await Request.find({})
        res.status(200).json(requests)
    } catch (error) {
        res.status(500).json({error: error.message})
    } 

}

module.exports = {
    postRequest,
    getRequest
}