const express = require('express')
const swaggerUi = require('swagger-ui-express')
const route = require('./routes/char.Route')
const swggerDocument = require('./documentation.json')

const app = express();

require("dotenv").config()

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swggerDocument))

app.use(express.json())
app.use('/' , route)

module.exports = app;