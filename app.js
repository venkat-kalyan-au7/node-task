import express from "express"
import morgan from "morgan"
import validator from "express-validator"

import todoRoutes from "./routes/todoRoutes"
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.use(validator())

app.use(morgan('tiny'))


app.use('/api',todoRoutes)

module.exports = app