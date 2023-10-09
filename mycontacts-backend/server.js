const express = require('express');
const dotenv = require('dotenv').config();
const routes = require('./routes/contactRoutes')
const app = express()

const port = process.env.PORT || 5000;

app.use(express.json())
app.use("/api/contacts",routes)

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})