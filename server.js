import app from "./app"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()


//database connection
mongoose.connect(process.env.db_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:true
}).then(()=>{
    console.log("database connected")
}).catch((err)=>{
    console.log("failed to connect database: ",err)
})



const PORT = process.env.PORT||5000


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})