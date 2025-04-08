const User = require("../models/userModel")

// login para un user 
const getUser = async (req, res) => {
    const {email, password, username, role} = req.body

    if(!email || !password || !username || !role) {
        return res.status(400).json({message: "Faltan datos por proporcionar"})
    }

    try {
        const user = await User.findOne({email, password, username, role})
        if (!user) {
            return res.status(404).json({error: "Usuario no encontrado" })
        } else {
            return res.status(200).json({ message: "Inicio de sesión exitoso", user })
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// Crear a un nuevo user
const postUser = async (req, res) => {
    const {email, password, username, role} = req.body

    if(!email || !password || !username || !role) {
        return res.status(400).json({message: "Faltan datos por proporcionar"})
    }

    try {
        const user = await User.create({email, password, username, role})
        res.status(200).json({ message: "Usuario creado con éxito", user })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// Actualizar a un user
const putUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})

        if(!user) {
            return res.status(400).json({message: "Faltan datos por proporcionar"})
        }

        const updateUser = await User.findById(req.params.id)
        res.status(200).json({message: "Usuario actualizado/modificado con exito", updateUser})
    } catch (error) {
        res.status(500).json({messege: error.messege})
    }
}

// Eliminar a un user
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if(!user) {
            return res.status(401).json({error: "Usuario no encontrado" })
        }
        
        res.status(200).json({message: "Usuario eliminado con exito"})
    } catch (error) {
        res.status(500).json({messege: error.messege})
    }
}

// Llama a todos los users 
const getUsers = async (req, res) => {
    try {
        const users = await User.find({})  
        res.status(200).json({users})
    } catch (error) {
        res.status(500).json({messege: error.messege})
    }

}
module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser,
    getUsers
}