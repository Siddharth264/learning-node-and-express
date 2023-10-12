const express = require('express');
const dotenv = require('dotenv').config();
const contactRoutes = require('./routes/contactRoutes')
const userRoutes = require('./routes/userRoutes')
const errorHandler = require('./middleware/errorHandler')

const connectDb = require('./config/dbConnection')

connectDb();

const app = express()

const port = process.env.PORT || 5000;

app.use(express.json())
app.use("/api/contacts",contactRoutes)
app.use("/api/users",userRoutes)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})