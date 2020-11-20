import express from "express"
import morgan from "morgan"

import todoRoutes from "./routes/todoRoutes"
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.use(morgan('tiny'))


app.use('/api',todoRoutes)

module.exports = app