import express from "express"

const router = express.Router()


import upload from "../helper/imageUpload"
import {addTodo,
    listOfTodos
    ,viewSingleTodo,
    updateTodo,
    deleteTodo,
    deleteCompletedTodos,
    getTodoByTitle,
    ByDate,
    demoRoute
    } from "../controller/todoController"

import {DataValidation} from "../validations/dataValidation"


router.post('/addtodo',upload.any(),DataValidation,addTodo)

router.get('/viewtodos',listOfTodos)

router.get('/tododetails/:id',viewSingleTodo)

router.put('/updatetodo/:id',DataValidation,updateTodo)

router.get('/:title',getTodoByTitle)

router.delete('/deletetodo/:id',deleteTodo)

router.delete('/deletemany',deleteCompletedTodos)

router.get('/todos/:targetDate',ByDate)





module.exports = router