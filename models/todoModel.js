import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:4

    },
    description:{
        type:String,
        required:true,
        minlength:10
    },
    images:{
        required:true,
        type:Array,
        default:[]
    },
    targetDate:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        enum:['todo','in-progress','done'],
        required:true
    }
})

const Todo= mongoose.model('todo',todoSchema)

module.exports= Todo