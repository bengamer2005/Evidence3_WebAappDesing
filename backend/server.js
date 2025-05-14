const express = require("express")
const cors = require("cors")
const userRoute = require("./routes/userRoute")
const clientRoute = require("./routes/clientRoute")
const inventoryRoute = require("./routes/inventoryRoute")
const requestRoute = require("./routes/requestRoute")
const ordersRoute = require("./routes/ordersRoute")
// CONEXION A LA DB Y CREACION DE ADMIN Y PRODUCTOS
const connectDB = require("./config/connectDB")
const defaultAdmin = require("./utils/createDefaultAdmin")
const defaultProducts = require("./utils/createDefaultProduct")
connectDB()
defaultAdmin()
defaultProducts()

const app = express()
app.use(express.json())

// COSAS NUEVAS ELIMINAR CUANDO YA NO LO OCUPE
const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const httpRequestsCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Número total de solicitudes HTTP',
  labelNames: ['method', 'route', 'status_code']
});

app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestsCounter.inc({
      method: req.method,
      route: req.route?.path || req.path,
      status_code: res.statusCode
    });
  });
  next();
});

app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
  } catch (ex) {
    res.status(500).end(ex);
  }
});


// CONECTA MI FRONTEND CON MI BACKEND, Y PERMITE LAS PETICIONES
const coreOptions = {
    origin: "https://evidence3-webaappdesing-frontend.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}
app.use(cors(coreOptions))

// SE ASIGNA PUERTO PARA EL BACKEND
const PORT = process.env.PORT || 3000
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
})
// const port = 3000
// app.listen(port, () => {
//     console.log(`Servidor corriendo en http://localhost:${port}/halcon-client`)
// })

// RUTAS
app.use("/halcon", userRoute)
app.use("/halcon", clientRoute)
app.use("/halcon", inventoryRoute)
app.use("/halcon", requestRoute)
app.use("/halcon", ordersRoute)