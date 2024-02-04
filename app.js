
const express = require("express")
require('dotenv').config()
const cors = require('./config/cors')
const app = express()
const productRoutes = require("./routes/productRouter");
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors)

// Routers URL
app.use("/products", productRoutes);
app.get("/", (req, res) => {
res.send('Hello')
})



app.listen(PORT, ()=> console.log(`listen to port ${PORT}`))
