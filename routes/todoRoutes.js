import express from "express"

const router = express.Router()


import upload from "../helper/imageUpload"
import {addTodo,listOfTodos} from "../controller/todoController"



router.post('/addtodo',upload.any(),addTodo)

router.get('/viewtodos',listOfTodos)


module.exports = router