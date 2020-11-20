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

app.get('/',(req,res)=>{
    res.send('go to this url to run api on postman: https://documenter.getpostman.com/view/11110002/TVetc6Mu#c1420970-16dc-4ac2-9239-d6ea55943742')
})

module.exports = app