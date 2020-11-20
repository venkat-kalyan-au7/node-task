import express from "express"

const router = express.Router()


import upload from "../helper/imageUpload"
import {addTodo,
    listOfTodos
    ,viewSingleTodo,
    updateTodo,
    deleteTodo} from "../controller/todoController"



router.post('/addtodo',upload.any(),addTodo)

router.get('/viewtodos',listOfTodos)

router.get('/tododetails/:id',viewSingleTodo)

router.put('/updatetodo/:id',updateTodo)

router.delete('/deletetodo/:id',deleteTodo)


module.exports = router