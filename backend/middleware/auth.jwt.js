const jwt = require("jsonwebtoken")
const SECRET_KEY = "mi_clave_secreta"

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
        return res.status(403).json({ message: "no existe el token" })
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded
        next()
    } catch (err) {
        return res.status(401).json({ message: "token invalido" })
    }
}

module.exports = verifyToken